// import toast from "react-hot-toast";
// import { checkLogin } from "../../functions/userFunction";
import "./signIn.css";
import { useForm } from "react-hook-form";
import { checkSignIn } from "../../func-task-user/userFunction";
import FormSignIn from "../../interfaces/formSignIn";
const signInImg =
  "https://cl-wpml.s3.ap-southeast-1.amazonaws.com/cam-nang-viec-lam/wp-content/uploads/2023/07/13105541/To-do-list-concept-illustration.jpg";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignIn>();
  const onSubmit = async (data: FormSignIn)=>{
    console.log(data);
    // localStorage.removeItem('accessToken')
    checkSignIn(data);
    // const accessToken = localStorage.getItem('accessToken');console.log(accessToken);
    // if(accessToken){
    //   toast.success('You sign in successfully!');
    //   // window.location.href = '/board';
    // } else{
    //   toast.error('You sign in failed!'); 
    // }
  }
  return (
    <>
      <div className=" flex  bg-[#000114]">

        <div className="w-[50%] h-auto">
          <img src={signInImg} alt="" className="w-full h-full rounded-sm" />
        </div>

        <form className="w-[50%] h-auto items-center flex flex-col justify-center space-y-7" >
          <h2 className="text-white text-2xl font-semibold">SIGN IN</h2>
          <input type="email" {...register("email", {required: true})} 
          className="w-3/5 h-[20px]  p-5 rounded-md  focus:outline-none"/>

          <input type="password"  {...register("password", { required: true })} 
          className="w-3/5 h-[20px]  p-5 rounded-md  focus:outline-none"/>
          
          {errors.password && <span>This field is required</span>}

          <button
            className="m-auto w-1/5 h-10 rounded-md bg-green-700 shadow-lg shadow-gray-500/50
            text-white hover:bg-green-500 hover:font-semibold duration-100 easy-in-out 
            hover:translate-y-1 hover:shadow-none" 
            type="button" onClick={()=>{
              handleSubmit(onSubmit)()
            }}>
            Sign In
          </button>
          <a className="text-white text-end hover:text-blue-400" href="signUp">
              Have account yet, to Sign up !
            </a>
        </form>
      
      </div>
    </>
  );
};
export default SignIn;
