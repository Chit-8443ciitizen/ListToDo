import moment from "moment";
import Chart from "../../shares/chart/chart";
import CreateTask from "../../shares/task_modal/createTask";
import { getAllTask } from "../../func-task-user/taskFunction";
import Task from "../../interfaces/task";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


const hourDayCurrent = moment().format('DD-MM-YYYY');

const OverView = () => {
  const [total, setTotal] = useState<number>(0);
  const [done, setDone] = useState<number>(0);
  const [yet, setYet] = useState<number>(0);
  // const [isSignIn, setSignIn] = useState<string>('');
  // checkLogin() && setSignIn(true);

      // console.log(uid);
    // }  
    // getIdUser();
  const getDataTasks = async ()=>{
    try{
      const listTask: Task[] = await getAllTask();
      let countTotal:number = listTask.length;
      let countDone:number = 0;
      let countYet:number = 0
      listTask.forEach((task)=>{
        ( (task.task_priority === "done") && countDone++ );
        ( (task.task_priority === "not yet") && countYet++ );
      })

      setDone(countDone);
      setTotal(countTotal);
      setYet(countYet);
    } catch (error){
      toast.error(`Error: ` + error);
    }
  }
  useEffect(()=>{
    getDataTasks();
  }, [])  ;      
  return (
    <div>
      <div className={`h-auto`}>
      {/* <div className={` ${ isSignIn ? 'h-auto' : 'opacity-0'}`}> */}
        <div className="flex flex-row items-center justify-between">
            <p className="text-gray text-start opacity-50 tracking-wider my-5">
              Today: {hourDayCurrent}{" "}
            </p>
            <CreateTask time={hourDayCurrent} />
        </div>

        <Chart />

        <div className="flex flex-wrap space-x-3 justify-center">
          
          <div className={`text-blue-700 flex flex-col space-y-2  border-2 rounded-lg  
            w-60 h-40 items-center justify-center font-bold `}>
              <p className="text-6xl">{total}</p>
              <p className="text-2xl">Total of alltask</p>
          </div>
          <div className={`text-green-500 flex flex-col space-y-2  border-2 rounded-lg  
            w-60 h-40 items-center justify-center font-bold `}>
              <p className="text-6xl">{done}</p>
              <p className="text-2xl">Total of done-task</p>
          </div>
          <div className={`text-orange-500 flex flex-col space-y-2  border-2 rounded-lg  
            w-60 h-40 items-center justify-center font-bold `}>
              <p className="text-6xl">{yet}</p>
              <p className="text-2xl">Total of not-yet task</p>
          </div>
        </div>

      </div>
      </div>
  );
};

export default OverView;
