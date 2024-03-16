import { FC } from "react";
interface ApprovalButtonsProps {
  handleRejectClick: (selected: string) => void;
}

const ApprovalButtons: FC<ApprovalButtonsProps> = ({ handleRejectClick }) => { 


  return (
    <>
      <form className="w-full border-t p-3 flex items-center justify-center space-x-1">
        <button
          onClick={() => handleRejectClick("Approve")}
          className="h-10 hover:bg-green-800 hover:text-white w-2/5 border border-green-500 rounded duration-100 ease-in-out"
          type="button"
        >
          Approve
        </button>
        <button
          onClick={() => handleRejectClick("Reject")}
          className="h-10 hover:bg-red-800 hover:text-white w-2/5 border border-red-500 rounded duration-100 ease-in-out"
          type="button">
          Reject
        </button>
      </form>
    </>
  );
};

export default ApprovalButtons;
