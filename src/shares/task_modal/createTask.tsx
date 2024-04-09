import React, {useState} from 'react'

import { toast } from 'react-hot-toast';
import { createTask } from '../../func-task-user/taskFunction';
import moment from 'moment';


const CreateTask = ({time}: {time: any})=> {
    const [showModal, setShowModal] = useState<boolean>(false);
    let [inputTaskName, setTaskName] = useState<string>("");
    let [inputTaskDeadline, setTaskDeadline] = useState<string>("");
    let [inputTaskPriority, setTaskPriority] = useState<string>("");
    

    const clearInput = () => {
      setTaskName("");
      setTaskDeadline("");
      setTaskPriority("");
    };
  
    const handleClicked = () => {
      const inputTaskDeadlineFormat =  moment(inputTaskDeadline, 'YYYY-MM-DD').format('DD-MM-YYYY');
      const taskPriority = inputTaskPriority !=="" ? inputTaskPriority : "not yet";
      if (
        inputTaskName === "" ||
        inputTaskDeadlineFormat === ""
      ){
        toast.error("Must fill enough.", { duration: 2000 });
      } else if( moment(inputTaskDeadlineFormat, 'DD-MM-YYYY').diff(moment(time, 'DD-MM-YYYY')) < 0 ){
        toast.error("Deadline must after today", { duration: 2000 });
        return
      }
      else {
        createTask(inputTaskName, inputTaskDeadlineFormat, taskPriority,);
        clearInput();
      }
    };
    return (
      <>
        <button
          className=" w-8 h-8 rounded-md 
                      text-white bg-green-200 hover:bg-green-500 font-semibold duration-100 easy-in-out 
                      tracking-wider material-symbols-outlined"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Save
        </button>
        {showModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-white">Create task</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto ">
                    <div className="col-span-2">
                     
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required placeholder='Input task name'
                        value={inputTaskName}
                        onChange={(e) => {
                          setTaskName(e.target.value);
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
                        type="date"
                        name="deadline"
                        id="deadline"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                        value={inputTaskDeadline}
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
                      <select
                        id="priority"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-white-200 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={inputTaskPriority}
                        onChange={(e) => {
                          setTaskPriority(e.target.value);
                        }}
                      >
                        {/* <option value="" selected>
                          Select
                        </option> */}
                        <option value="not yet" selected>Not yet</option>
                        {/* <option value="done">Done</option> */}
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
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        handleClicked();
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
          </>
        ) }
      </>
    );
  };


  
  


export default CreateTask