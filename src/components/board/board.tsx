// import { useState } from "react"
// import { checkLogin } from "../../functions/userFunction"

import { useState } from "react"
import Nav from "../nav"
import Sidebar from "../sidebar"
import Error from "../Error";
// import { getCurrentUserFirebase } from "../../func-task-user/userFunction";


const Board = ()=>{
  const [isSignIn, setSignIn] = useState<boolean>(true);
  
  // const uid = localStorage.getItem('uid');
  // uid && console.log(uid)
  // console.log(getCurrentUserFirebase())
  return isSignIn ?  (

      <div className='flex w-full h-full'> 
        <Sidebar/> 
        <Nav/> 
      </div>

  )
  :(<Error/>)
}
export default Board


