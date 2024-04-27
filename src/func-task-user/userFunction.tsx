
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { appFirebase, auth } from "../firebaseConfig";
import UserCreate  from "../interfaces/userCreate";
import FormSignIn  from "../interfaces/formSignIn";
import { push, ref, set, update, get, getDatabase } from "firebase/database";
import User from "../interfaces/user";



interface UserCurrentFirebase {
  user_ID: string,
  user_email: string, 
  accessToken: string
}
// interface SetUserDataAction {
//   type: string;
//   payload: UserCurrentFirebase;
// }

// Define action creator



const CreateUser = async(data: UserCreate)=> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.pass);
    if (userCredential) {
      console.log(userCredential);
      toast.success(`Good job. Sign up successfully!`);
      return true;
    } else {
      toast.error(`Failed to create user.`);
    }
  } catch (error:any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`errorCode: ` + errorCode);
    console.log(`errorMessage: ` + errorMessage);
  }
};

const getIdCurrentUser = ()=>{
  auth.onAuthStateChanged((user)=>{
    if (user !== null ){
      return user.uid;
    } else{
      console.table('error getIdCurrentUser = ()')
    }
  })
}
const GetDataUser = ()=>{
  // const dispacth = useDispatch();
  try{
      auth.onAuthStateChanged( async(user)=>{
        if (user !== null) {
          // If user is signed in
          const accessToken = await user.getIdToken(); // Get Firebase ID token
          const userData: UserCurrentFirebase = {
            user_ID: user.uid,
            user_email: user.email || '',
            accessToken: accessToken // Assign ID token to accessToken
          };
          // dispacth(setUserData(userData));
          localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
          console.table(localStorage.getItem('user'));
        } else {
          console.log('User not signed in');
        }
      })
    }
    catch(error){
      console.log('error: '+error)
    }
}
const CheckSignIn =  (data : FormSignIn)=>{  

    signInWithEmailAndPassword(auth, data.email, data.password)
    .then( () => {
        GetDataUser();
        toast.success('Sign in successfully!')
        window.location.href = '/board'

    })
    .catch((error) => {
      toast.error('You sign in failed!'); 
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // window.location.href = '/signIn'
    });
}
const CheckSignOut = async ()=>{
  try {
    await auth.signOut(); // Sign out the user with Firebase

    localStorage.removeItem('user'); // Remove user data from localStorage
    console.log('User logged out successfully');
    window.location.href='/signIn'
  } catch (error) {
    console.error('Error logging out:'+ error);
  }
}
const saveUser = async (
  data: UserCreate
) => {
  try {
    const db = getDatabase(appFirebase);
    toast.loading(`Adding  user ...`);
    const newDocRef = push(ref(db, "listToDo/users/")); 
    // const uid = newDocRef.key;
    const uid = getIdCurrentUser();
    set(newDocRef, {
      user_ID:  uid, // uid  newUser_ID ""
      user_name: data.name,
      user_ImgUrl: data.ImgUrl,
      user_email: data.email,
      user_pass:data.pass,
      use_age: data.age,
      user_city: data.city,
      user_gender: data.gender
    })
      .then(() => {
        toast.success(`Add user successfully`, { duration: 2000 });
        return true;
      })
      .catch((err) => {
        toast.error("error " + err, { duration: 2000 });
      });
   
  } catch (err) {
    console.log("Error: " + err);
  }
};

const updateUser = async (
  data: User
) => {
  try {
    const db = getDatabase(appFirebase);
    const newDocRef = ref(db, "listToDo/users/" + data.user_ID);
    update(newDocRef, {
      user_name:data.user_name,
      user_ImgUrl:data.user_ImgUrl,
      user_email:data.user_email,
      user_pass:data.user_pass,
      use_age:data.use_age,
      user_city:data.user_city,
      user_gender:data.user_gender
    })
      .then(() => {
        toast.success(`Changed successfully`);
        window.location.reload();
      })
      .catch((error) => {
        toast.error("error " + error);
      });
  } catch (err) {
    toast.error(`Error: ` + err);
  }
};

const deleteUser = async (
  data: User
) => {
  try {
    const db = getDatabase(appFirebase);
    const newDocRef = ref(db, "listToDo/users/" + data.user_ID);
    update(newDocRef, {
      user_name:data.user_name,
      user_ImgUrl:data.user_ImgUrl,
      user_email:data.user_email,
      user_pass:data.user_pass,
      use_age:data.use_age,
      user_city:data.user_city,
      user_gender:data.user_gender
    })
      .then(() => {
        toast.success(`Changed successfully`);
        window.location.reload();
      })
      .catch((error) => {
        toast.error("error " + error);
      });
  } catch (err) {
    toast.error(`Error: ` + err);
  }
};

const getAllUser = async () => {
  try {
    const db = getDatabase(appFirebase);
    const docRef = ref(db, "listToDo/users/");
    const snapshot = await get(docRef);
    if (snapshot.exists()) {
      const data: User[] = Object.values(snapshot.val());
      return data;
    } else {
      throw new Error("Data not found");
    }
  } catch (err) {
    toast.error(`Error: ` + err);
    return [];
  }
};

export {
  getIdCurrentUser,
  // getCurrentUserFirebase,
  CheckSignIn,
  CheckSignOut,
  CreateUser ,
  saveUser,
  updateUser,
  getAllUser,
  deleteUser
};
