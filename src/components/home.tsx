// import { useState } from "react";
// import {getDatabase, ref, get} from 'firebase/database';
// import appFirebase from "../firebaseConfig";
// import Task from "../interfaces/task";
// //import {saveTask} from '../functions/taskFunction'
// import  toast, { Toaster } from 'react-hot-toast';
import FecthCity from "./fetchApi/fecthCity";


const Home = () => {
  // let [inputValue1, setInputValue1] = useState<string>('');
  // let [inputValue2, setInputValue2] = useState<string>('');
  // let [fruitArray, setFruitArray] = useState<Task[]>([]);
  // // const saveData = async() =>{
  // //   const db = getDatabase(appFirebase);
  // //   const newDocRef = push(ref(db, "listToDo/today"));
  // //   set(newDocRef, {
  // //     task_name : inputValue1,
  // //     task_description: inputValue2
  // //   }).then( ()=>{
  // //     alert(`Add success task: 
  // //     name - ${inputValue1}, description - ${inputValue2}`);
  // //   }).catch ( (error)=>{
  // //     console.log("error " + error);
  // //   })
  // // }
  
  // // const handleSaveData = async ()=>{
  // //   try{
  // //     await saveTask(inputValue1, inputValue2);
  // //     // toast.success('Add successfuly!')
      
              
  // //   }
  // //   catch(err){
  // //     console.log("error: "+err)
  // //   }
  // // }
  // const fetchData = async() =>{
  //   const db = getDatabase(appFirebase);
  //   const dbRef = ref(db, "listToDo/today");
  //   const snapshot = await get(dbRef);
  //   if (snapshot.exists()){
  //     const notify = () =>{ toast.loading('Loading data..')}
  //     notify();
  //     setFruitArray(Object.values(snapshot.val()));
  // } else {
  //   const notify = () =>{ toast.error('Error data..')}
  //     notify();
  //   // alert('Error');
  // }
  // }
  
  return (<>
  {/* <Toaster /> */}
  {/* <div className="flex flex-col"> data
    <label  htmlFor=""> Enter task-name
      <input className="border-2" type="text" value={inputValue1}
      onChange={(e)=> setInputValue1(e.target.value)}/>
    </label>
    
    <label htmlFor=""> The task's description 
      <input className="border-2" type="text" value={inputValue2}
      onChange={(e)=> setInputValue2(e.target.value)} />
    </label>
    <br />
    
    <hr />

    <button className="border-2" onClick={fetchData}>Display Data</button>
    <ul>

      {fruitArray.map((row, index)=>(
        <li key={index}> {row.task_name} : {row.task_priority}</li>
        // <button>update</button>
      ))}
    </ul>
  </div> */}

  <FecthCity/>


  </>
  )
}

export default Home