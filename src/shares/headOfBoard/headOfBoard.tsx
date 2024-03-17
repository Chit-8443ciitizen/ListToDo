

const HeadOfBoard = () => {
  return (
    <>
      <form className="flex w-full h-auto items-center justify-between px-1">
        <div className="w-50 space-y-2">
          <h1 className="font-semibold text-4xl">Schedule</h1>
   
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <button
            className="w-full h-full material-symbols-outlined text-white bg-green-700 hover:bg-green-500 duration-100 easy-in-out rounded-full flex items-center justify-center"
            type="submit"
          >
            add
          </button>
        </div>
      </form>
    </>
  );
};
export default HeadOfBoard;
