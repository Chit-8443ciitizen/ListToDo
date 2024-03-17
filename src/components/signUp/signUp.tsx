
import "./signUp.css";

const signUpImg =
  "https://cdni.iconscout.com/illustration/free/thumb/free-task-list-2080780-1753768.png";

const SignUp = () => {
  return (
    <>
      <div className=" flex  bg-[#000114] maxvh">
        <div className="w-[50%] h-auto text-center justify-center">
          <img src={signUpImg} alt="" className="w-full h-full ml-[25%] rounded-sm object-contain" />
        </div>
        <form
          className="w-[50%] h-auto items-center flex flex-col justify-center space-y-7"
          action=""
        >
          <input
            type="email"
            required
            placeholder="Email..."
            className="w-3/5 h-[20px]  p-5 rounded-md  focus:outline-none"
          /> {/** shadow */}
          <input
            type="password"
            required
            placeholder="Passwword..."
            className="w-3/5 h-[20px]  p-5 rounded-md  focus:outline-none"
          />
          <input
            type="password"
            required
            placeholder="Passwword confirm..."
            className="w-3/5 h-[20px]  p-5 rounded-md  focus:outline-none"
          />
          <a className="text-white text-end" href="signIn">
            Had account, to Sign in
          </a>
          <button
            type="button"
            className="m-auto w-1/5 h-10 rounded-md bg-green-700 shadow-lg shadow-gray-500/50
            text-white hover:bg-green-500 hover:font-semibold duration-100 easy-in-out 
            hover:translate-y-1 hover:shadow-none" 
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
export default SignUp;
