// import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AnchorLab from "../shares/anchorBoard/anchorBoard";
import InfUser from "./InfUser";
import toast from "react-hot-toast";
import { CheckSignOut } from "../func-task-user/userFunction";
// import { error } from "console";
// import User from "../interfaces/user";

const Sidebar = () => {
  // const [authUser, setAuthUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     user !== null ? setAuthUser(user) : setAuthUser(null);
  //   });

  //   return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  // }, []);
  const handleSignOut = ()=>{
   CheckSignOut();
  }
  return (
    <>
      <div className="w-[30%] bg-[#000114] h-[100vh] text-white px-5 pb-5">
        <InfUser />

        <AnchorLab />
        <button 
          onClick={()=>{ handleSignOut()}}
            type="button"
            className="ml-20 w-1/5 h-10 rounded-md bg-gray-700 shadow-lg shadow-gray-500/50
            text-white hover:bg-green-500 hover:font-semibold duration-100 easy-in-out 
            hover:translate-y-1 hover:shadow-none tracking-wider" 
          >
            Log out
          </button>
      </div>
    </>
  );
};

export default Sidebar;
