import { User, onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from 'react';
import { auth } from "../firebaseConfig";



const Home = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  
  useEffect(()=>{
    const listen = onAuthStateChanged( auth, (user)=>{
      user !== null ? setAuthUser(user) : setAuthUser(null);
    })
     listen();
  })
  return (<>  
  <div> {authUser ? <p>Sign in</p> : <p>Sign out</p> }</div>
  </>
  )
}

export default Home