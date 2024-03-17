import AnchorLab from "../shares/anchorBoard/anchorBoard";
import User from "./user";

const Sidebar = () => {
  return (
    <>
      <div className="w-[30%] bg-[#000114] h-[100vh] text-white px-5 pb-5">
        <User />

        <AnchorLab />
        <button
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
