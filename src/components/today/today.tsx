import { useEffect, useState } from "react";
import Task from "../../interfaces/task";
import toast from "react-hot-toast";
import {
  deleteTask,
  deleteTasks,
  doneTasks,
  getAllTask,
  getAllTaskNotNull,
} from "../../func-task-user/taskFunction";
import EditTask from "../../shares/task_modal/editTask";
import CreateTask from "../../shares/task_modal/createTask";
import moment from "moment";


const hourDayCurrent = moment().format("DD-MM-YYYY");
const Today = () => {
  const [taskArray, setTaskArray] = useState<Task[]>([]);
  const [clickBtnFilter, setBtnFilter] = useState<boolean>(false);
  const [listIdDel, setListIdDel] = useState<Array<string>>([]);
  const [displayDeleted, setDisplayDeleted] = useState<boolean>(false);

  useEffect(() => {
    fetchData(true);
    
  },[]); // ,[]

  const fetchData = async (display: boolean) => {
    try {
      const tasks: Task[] = display ? await getAllTask() : await getAllTaskNotNull();
     // setTaskArray(tasks.filter(task => moment(task.task_deadline, 'DD-MM-YYYY').isSame(moment('DD-MM-YYYY'), 'day')) );
      // setTaskArray([...taskArray,...tasks]);
      setTaskArray(tasks.filter( task => 
        moment(task.task_deadline,'DD-MM-YYYY').isSame(moment(hourDayCurrent,'DD-MM-YYYY'), 'day') 
      ));
    

    } catch (err) {
      toast.error(`Error: ` + err);
    } finally {
      toast.dismiss();
    };
  }

  const handleClickedDelete = (
    id: string,
    name: string,
    deadline: string,
    priority: string
  ) => {
    if (name === "" || deadline === "" || priority === "") {
      toast.error("Data not enough.", { duration: 2000 });
    } else {
      if (window.confirm(`Do you really want to delete this task ?`)) {
        deleteTask(id, name, deadline, "deleted");
      }
    }
  };

  const ClickDeleteAll = () => {
    alert(`${listIdDel} `);
    deleteTasks(listIdDel);
  };

  const ClickDoneAll = () => {
    alert(`${listIdDel} `);
    doneTasks(listIdDel);
  };

  const DisplayAll = () => {
      setDisplayDeleted(displayDeleted => displayDeleted = true);
      ( displayDeleted === true) &&  fetchData(displayDeleted);
  };

  const DisplayNotDel = () => {
      setDisplayDeleted(displayDeleted => displayDeleted = false);
        ( displayDeleted === false) && fetchData(displayDeleted);
    
  };
  return (
    <>
      <div className="h-full max-h-[90vh] overflow-y-auto">
        {/* <HeadOfBoard /> */}
        <div className="flex flex-row items-center justify-between">
          <p className="text-gray text-start opacity-50 tracking-wider my-5">
            Today: {hourDayCurrent}{" "}
          </p>
          <CreateTask time={hourDayCurrent} />
        </div>

        <button
          id="dropdownDownToday"
          onClick={()=>{ 
          if (clickBtnFilter){setBtnFilter(true)}
          else{setBtnFilter(true)}
          }}
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Actualize{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`z-10 ${clickBtnFilter ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDownToday"
          >
            <li>
              <p  onClick={() => {ClickDoneAll(); }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Done all </p>
            </li>

            <li>  
              <p  onClick={() => { ClickDeleteAll();  }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Delete all   </p>
            </li>

            <li>
              <p onClick={() => { setDisplayDeleted(displayDeleted => displayDeleted = true);
                  DisplayAll(); }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Show includes del-task
              </p>
            </li>

            <li>
              <p onClick={() => {setDisplayDeleted(displayDeleted => displayDeleted = false);
                  DisplayNotDel();  }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Show NOT includes del-task
              </p>
            </li>

          </ul>
        </div>

        <div className="w-full h-auto  flex flex-wrap">
          {taskArray.map((task) => (
            <form
            key={task.task_ID}
            className={`w-[45%] h-12 m-1 border-[#000114]-500 border-2 ${
              task.task_priority === "done" ? "border-green-400" : 
              task.task_priority === "not yet" ? "border-orange-200" : ""
            } rounded-lg flex items-center justify-evenly px-1`}
            >
              <input
                type="checkbox"
                onChange={(e) => {
                  alert(task.task_ID);
                  if (e.target.checked && !listIdDel.includes(task.task_ID)) {
                    setListIdDel([...listIdDel, task.task_ID]);
                  } else if (
                    !e.target.checked &&
                    listIdDel.includes(task.task_ID)
                  ) {
                    setListIdDel(listIdDel.filter((id) => id !== task.task_ID));
                  }
                }}
                className="w-6 h-6 rounded-full text-start"
                disabled={task.task_priority === "null"}
              />
              <p className="truncate  w-[70%] text-gray text-start opacity-50 tracking-wider my-5">
                {task.task_name}
              </p>
              <div className="">
                <div className="flex flex-row space-x-3">
                  <EditTask
                    task_ID={task.task_ID}
                    task_name={task.task_name}
                    task_deadline={task.task_deadline}
                    task_priority={task.task_priority}
                    time = {{time: hourDayCurrent}}
                    task_uid=""
                  />
                </div>
              </div>

              <div className="">
                <button
                  type="button"
                  className=" w-8 h-8 rounded-md 
                text-white bg-red-200 hover:bg-red-500 font-semibold duration-100 easy-in-out 
                  tracking-wider material-symbols-outlined"
                  onClick={() => {
                    handleClickedDelete(
                      task.task_ID,
                      task.task_name,
                      task.task_deadline,
                      task.task_priority
                    );
                  }}
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </>
  )

}
export default Today;
