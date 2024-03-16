import AnchorLab from "../shares/anchorLab";




const userName: string = "Huynh Minh Hoa";

const Dashboard = () => {
return (
<>
   <div className="w-1/5 bg-slate-600  h-auto text-white px-5">
        <div className='flex flex-col items-center mb-5'>
            <img src="https://cdn-icons-png.flaticon.com/128/15194/15194189.png" alt="" className='w-20 rounded-full mt-5' />
            <p className=" uppercase font-bold text-xl">{userName}</p>
        </div>
        
        <AnchorLab/>
        
        
        
   </div>
</>
)
}

export default Dashboard