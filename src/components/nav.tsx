import { Outlet } from "react-router"


const Nav = () => {
    return (
    <>
        <div className="bg-blue-700 bg-opacity-5 w-4/5">
            <div className="text-center bg-white  h-10 flex items-center justify-center" >
                <input className="bg-transparent font-semibold text-xl" type="text" placeholder="WEB209 LABS" disabled />
            </div>
        <Outlet/>
        </div>
    
    </>
    )
}

export default Nav