import UserCurrentFirebase from "../interfaces/UserCurrentFirebase";

const InfUser = () => {
  const storedUserData = localStorage.getItem('user');
  const { user_ID, user_email, accessToken }: UserCurrentFirebase = storedUserData
    ? JSON.parse(storedUserData)
    : { user_ID: "Huynh Minh Hoa", user_email: "fpoly2024@fpt.edu.vn" , accessToken: ""};
  
  
  return (
    <>
      <div className="flex flex-col items-center mb-10 ">
        <div className="relative mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15194/15194189.png"
            alt=""
            className="w-20 rounded mt-10 "
          />
          <span className="absolute w-7 h-7 bg-red-600 rounded-full top-8 right-0 text-center font-semibold">
            5
          </span>
        </div>

    
        <p className=" font-semibold text-xl">{user_ID}</p>
        <p className=" opacity-50  text-md">{user_email}</p>
      </div>
    </>
  );
};
export default InfUser;
