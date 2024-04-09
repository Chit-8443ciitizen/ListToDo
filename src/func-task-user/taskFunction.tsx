import { getDatabase, ref, get, set, push, update } from "firebase/database";
import appFirebase from "../firebaseConfig";
import toast from "react-hot-toast";
import Task from "../interfaces/task";
// import { getIdCurrentUser } from "./userFunction";

const createTask = async (
  name: string,
  time: string,
  priority: string,
  // user_ID: string
  // description: string
) => {
  
  try {
    const db = getDatabase(appFirebase);
    toast.loading(`Adding  task ...`,{duration:1500});
    const newDocRef = push(ref(db, "listToDo/tasks/"));
    const newTaskID = newDocRef.key;
    // const currentIdUser = getIdCurrentUser();
    set(newDocRef, {
      task_ID : newTaskID,
      task_name: name,
      task_deadline: time,
      task_priority: priority,
      task_uid: "currentIdUser"
      // task_userID: user_ID
      // task_description: description,
    }) 
    .then(() => {
      toast.success(`Add  task successfully`, { duration: 2000 });
      window.location.reload();

    })
    .catch((err) => {
      toast.error("error " + err, {duration:2000});
    });
    // toast.dismiss();
  } catch (err) {
    console.log("Error: " + err);
  }
};

const updateTask = async (
  idTask: string,
  name: string,
  deadline: string,
  priority: string,
  
) => {
  try{
    const db = getDatabase(appFirebase);
      const newDocRef = ref(db, "listToDo/tasks/" + idTask);
      update(newDocRef, {
        // task_ID: idTask,
        task_name: name,
        task_deadline: deadline,
        task_priority: priority
      })
      .then(() => {
        toast.success(`Changed successfully`  );
        window.location.reload();
      })
      .catch((error) => {
        toast.error("error " + error);
      });
  } catch (err){
    toast.error(`Error: `+err);
  }
};


const deleteTask = async (
  idTask: string,
  name: string,
  deadline: string,
  priority : string
) => {
  try{
    const db = getDatabase(appFirebase);
      const docRef = ref(db, "listToDo/tasks/" + idTask);
      update(docRef, {
        task_priority: "deleted"
      })
      .then(() => {
        toast.success(`Success successfully`  );
        window.location.reload();
      })
      .catch((error) => {
        toast.error("error " + error);
      });
  } catch (err){
    toast.error(`Error: `+err);
  }
};

const deleteTasks = async (listId: Array<string>) => {
  const db = getDatabase(appFirebase);
  const promises = listId.map(async (idTask) => {
    try {
      const docRef = ref(db, "listToDo/tasks/" + idTask);
      await update(docRef, { task_priority: "deleted" });
      toast.success(`Delete all success successfully`);
      window.location.reload();
    } catch (error) {
      toast.error("error " + error);
    }
  });

  try {
    await Promise.all(promises);
  } catch (err) {
    toast.error(`Error: ` + err);
  }
};

const doneTasks = async (listId: Array<string>) => {
  const db = getDatabase(appFirebase);
  const promises = listId.map(async (idTask) => {
    try {
      const docRef = ref(db, "listToDo/tasks/" + idTask);
      await update(docRef, { task_priority: "done" });
      toast.success(`Done all success successfully`);
      window.location.reload();
    } catch (error) {
      toast.error("error " + error);
    }
  });

  try {
    await Promise.all(promises);
  } catch (err) {
    toast.error(`Error: ` + err);
  }
};



const getAllTask = async () => {
  try {
    const db = getDatabase(appFirebase);
    const docRef = ref(db, "listToDo/tasks/");
    const snapshot = await get(docRef);
    if (snapshot.exists()) {
      const data: Task[] = Object.values(snapshot.val());
      return data;
    } else {
      throw new Error("Data not found");
    }
  } catch (err) {
    toast.error(`Error: ` + err);
    return [];
  }
};

const getAllTaskNotNull = async () =>{
  try{
    const allTask : Task[] = await getAllTask();
    const listTask: Task[] = allTask.filter(task =>task.task_priority !== "deleted");
    return listTask;
  } catch (err){
    toast.error(`Error: `+err);
    return [];
  }

}
export { createTask, updateTask, getAllTask, deleteTask, deleteTasks,doneTasks, getAllTaskNotNull };
