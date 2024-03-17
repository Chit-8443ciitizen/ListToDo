import "./signIn.css";

const signInImg =
  "https://cl-wpml.s3.ap-southeast-1.amazonaws.com/cam-nang-viec-lam/wp-content/uploads/2023/07/13105541/To-do-list-concept-illustration.jpg";

const SignIn = () => {
  return (
    <>
      <div className=" flex  bg-[#000114]">
        <div className="w-[50%] h-auto">
          <img src={signInImg} alt="" className="w-full h-full rounded-sm" />
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
          <a className="text-white text-end" href="signUp">
            Haven’t account, to Sign up
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
export default SignIn;
