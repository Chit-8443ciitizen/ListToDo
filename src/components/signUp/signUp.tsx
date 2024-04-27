import toast from "react-hot-toast";
import "./signUp.css";
import { useForm } from "react-hook-form";
import  '../../.env'
import FecthCity from "../../prepairData/fecthCity";
import { CreateUser, saveUser } from "../../func-task-user/userFunction";

const signUpImg =
  "https://cdni.iconscout.com/illustration/free/thumb/free-task-list-2080780-1753768.png";
interface FormValue {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
  gender: GenderEnum;
  age: number;
  city: string
}

enum GenderEnum{
  Select = 'Select',
  Female = 'Female',
  Male = 'Male',
  Other =  'Other'
}
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onClickSubmit = async (data: FormValue)=>{  
    if(data.password !== data.repeatPass){
      toast.error("Your pass repeat is wrong!")
    }
    else if(data.password.length <=5 ) {
      toast.error("Your pass must be longer 5 character!")
    }
    else if( data.age <=10 ) {
      if(data.age <=0){
        toast.error("Your age invalid !")
      }else {
        toast.error("You not enough age to use this app !")
      }
    }
    else if(data.city === 'Select'){
      toast.error("Select your city")
    }
    else if(data.gender === 'Select'){
      toast.error("Select your gender")
    }
    else{
      const UserCreate = {
        name: data.name,
        ImgUrl: "",
        email:data.email,
        pass:data.repeatPass,
        age: data.age,
        city: data.city,
        gender: data.gender
      }
      const isUserCreated = await CreateUser(UserCreate);
      if (isUserCreated) {
        saveUser(UserCreate).then(()=> window.location.href = '/signIn')
        
      } else {
        console.log(UserCreate);
        toast.error(`:<. Sign up failed! Your email is exist`)
      }
    }
  }


  return (
    <>
      <div className=" flex  bg-[#000114] maxvh">
        <div className="w-[50%] h-auto text-center justify-center">
          <img src={signUpImg} alt="" className="w-full h-full ml-[25%] rounded-sm object-contain" />
        </div>
       
        <form className="w-[50%] h-auto items-center flex flex-col justify-center space-y-5" >
          <h2 className="text-white text-2xl font-semibold">REGISTER</h2>
          <input type="text" {...register("name", {required: true})} placeholder="Fill by your name.."
          className="w-2/5 h-[20px]  p-4 rounded-md  focus:outline-none"/>

          <input type="email" {...register("email", {required: true,  pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "invalid email address" }})} 
            placeholder="Fill by your email.." 
            className="w-2/5 h-[20px]  p-4 rounded-md  focus:outline-none"/>

          <input type="password"  {...register("password", { required: true,minLength:5 })} placeholder="Fill by your password.."
          className="w-2/5 h-[20px]  p-4 rounded-md  focus:outline-none"/>
          {errors.password && <span className="text-white">This field is required</span>}

          <input type="password"  {...register("repeatPass", { required: true })} placeholder="Repeat by your password.."
          className="w-2/5 h-[20px]  p-4 rounded-md  focus:outline-none"/>
          {errors.password && <span>This field is required</span>}

          <input type="number" {...register("age", {required: true})} placeholder="Fill by your age.." 
          className="w-2/5 h-[20px]  p-4 rounded-md  focus:outline-none"/>

          <select className="rounded-sm w-2/5 h-[30px] pl-4 m-auto  flex flex-row items-center justify-start space-x-2" 
          {...register("city", {required: true})}>
            <option value="Select" className="rounded-sm">Select city</option>
            <FecthCity/>
          </select>

          <select className="rounded-sm w-2/5 h-[30px] pl-4 m-auto  flex flex-row items-center justify-start space-x-2" 
          {...register("gender", {required: true})}>
            <option value="Select">Select gender</option>
            <option  value="Female" className=" w-2/5 h-[20px] text-black">Female</option>
            <option  value="Male" className=" w-2/5 h-[20px]">Male</option>
            <option  value="Other" className=" w-2/5 h-[20px]">Other</option>
          </select>
          

          <button
            className="m-auto w-1/5 h-10 rounded-md bg-green-700 shadow-lg shadow-gray-500/50
            text-white hover:bg-green-500 hover:font-semibold duration-100 easy-in-out 
            hover:translate-y-1 hover:shadow-none" 
            type="button" onClick={()=>{
              handleSubmit(onClickSubmit)();
              
            }}>
            Sign Up
          </button>
          <a className="text-white text-end hover:text-blue-400" href="signIn">
              Had account , to Sign in !
            </a>

        </form>

      </div>
    </>
  );
};
export default SignUp;
