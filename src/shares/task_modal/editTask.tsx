import Task from "../../interfaces/task";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { updateTask } from "../../func-task-user/taskFunction";
import moment from 'moment';

type EditTaskProps = Task & { time: {time:any} };
const EditTask: FC<EditTaskProps> = ({
  task_ID,
  task_name,
  task_deadline,
  task_priority,
  time, 
  task_uid
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  let [inputTaskNameEdit, setTaskNameEdit] = useState<string>("");
  let [inputTaskDeadlineEdit, setTaskDeadline] = useState<string>("");
  let [inputTaskPriorityEdit, setTaskPriority] = useState<string>("");


  const clearInput = () => {
    setTaskNameEdit("");
    setTaskDeadline("");
    setTaskPriority("");
  };
  // const handelConfirm = (message: string | undefined) : boolean =>{
  //   return window.confirm(message);
  // }
  const handleClicked = (id: string) => {
    const inputTaskDeadlineFormat =  moment(inputTaskDeadlineEdit, 'YYYY-MM-DD').format('DD-MM-YYYY');
    setTaskNameEdit(task_name);
    setTaskDeadline(task_deadline);
    setTaskPriority(task_priority);
    // toast.loading('Do you want change it?',{duration:1000});
    if (
      inputTaskNameEdit === "" &&
      inputTaskDeadlineEdit === "" &&
      inputTaskPriorityEdit === ""
    ) {
      toast.success("Nothing was changed", { duration: 2000 });
    } 
    else if( moment(inputTaskDeadlineFormat, 'DD-MM-YYYY').diff(moment(time.time, 'DD-MM-YYYY')) <= 0 ){
      toast.error("Deadline must after today", { duration: 2000 });
      return
    } 
     else {
      if( window.confirm('Bạn có muốn thay đổi không?')){
        updateTask( id,inputTaskNameEdit || task_name,inputTaskDeadlineEdit || task_deadline, inputTaskPriorityEdit || task_priority );
        clearInput();
        toast.success('Chỉnh sửa thành công!');
      } else{
        toast.success('Chỉnh sửa đã bị hủy!')
      }  
      
    }
  };
  return (
    <>
      <button
        // className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        className=" w-8 h-8 rounded-md 
                    text-white bg-yellow-200 hover:bg-yellow-400 font-semibold duration-100 easy-in-out 
                    tracking-wider material-symbols-outlined"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">Edit task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="col-span-2">
                    
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      // value = {inputTaskNameEdit !== "" ? inputTaskNameEdit : setTaskNameEdit(task_name)}
                      defaultValue={ inputTaskNameEdit || task_name }
                      placeholder={ task_name }
                      onChange={(e) => {
                        setTaskNameEdit(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Deadline"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Deadline
                    </label>
                    <input
                      type="text"
                      className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder={`Prev time: ` + task_deadline}
                      disabled
                    />

                    <input
                      type="date"
                      name="deadline"
                      id="deadline"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      value={inputTaskDeadlineEdit !== "" ? inputTaskDeadlineEdit : task_deadline}
                      placeholder={task_deadline}
                      onChange={(e) => {
                        setTaskDeadline(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="priority"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Priority
                    </label>
                    <input
                      type="text"
                      className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder={`Prev priority: ` + task_priority}
                      disabled
                    />
                    <select
                      id="priority"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={inputTaskPriorityEdit !== ""? inputTaskPriorityEdit : task_priority}
                      onChange={(e) => {
                        setTaskPriority(e.target.value);
                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="not yet">Not yet</option>
                      <option value="done">Done</option>
                      {/* <option value="late">Late</option> */}
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      handleClicked(task_ID);
                    }}
                  >
                    Save Changes
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default EditTask;
