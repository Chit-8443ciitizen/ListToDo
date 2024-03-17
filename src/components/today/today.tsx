import HeadOfBoard from "../../shares/headOfBoard/headOfBoard";
const dateCurrent = "03 April, 2024";
const Today = () => {
  const listBar = [
    
    { name: "Made a song", statusbar: "not yet" },
    { name: "Do homework", statusbar: "done" },
    { name: "Learning English", statusbar: "done" },
    { name: "Hangout with crush", statusbar: "not yet" },

  ];
  return (
    <>
      <div className="h-full max-h-[90vh] overflow-y-auto">
        <HeadOfBoard />
        <p className="text-gray text-start opacity-50 tracking-wider my-5">
          Today: {dateCurrent}
        </p>
        <form className="flex">
          <button
            type="submit"
            className=" w-20 h-10 rounded-md 
              text-white bg-cyan-800 hover:bg-cyan-400  duration-100 easy-in-out 
               material-symbols-outlined"
          >
            file_save
          </button>
          
        </form>
        <div className="w-full h-auto  flex flex-wrap">
          {listBar.map((bar, index) => (
            <form
              key={index}
              className="w-[45%] h-12 m-1 border-[#000114]-500 border-2 rounded-lg flex items-center justify-evenly px-1"
            >
              <input
                type="checkbox"
                className="w-[10%] h-6 rounded-full text-start"
                
                disabled={bar.statusbar !== 'not yet'}
              />
              <p className="w-[70%] text-gray text-start opacity-50 tracking-wider my-5">
                {bar.name.length > 60
                  ? `${bar.name.substring(0, 60)}...`
                  : bar.name}
              </p>
              <div className="">
                <button
                  type="button"
                  className=" w-8 h-8 rounded-md 
            text-white bg-yellow-200 hover:bg-yellow-500 font-semibold duration-100 easy-in-out 
             tracking-wider material-symbols-outlined"
                >
                  Edit
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className=" w-8 h-8 rounded-md 
            text-white bg-red-200 hover:bg-red-500 font-semibold duration-100 easy-in-out 
             tracking-wider material-symbols-outlined"
                >
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </>
  );
};
export default Today;
