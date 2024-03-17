import { Outlet } from "react-router";

const Nav = () => {
  return (
    <>
      <div className="bg-[#000114] w-4/5 h-[100vh]">
       
        <div className="rounded-2xl bg-white h-[95vh] m-5 p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Nav;
