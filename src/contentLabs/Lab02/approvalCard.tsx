import React, { FC, useState } from "react";

import CommentProp from "./commentProp";
import ApprovalButtons from "./approvalButtons";
import AlertCard from "./alertCard";

const ApprovalCard: FC = () => {
  const [showAlert, setShowAlert] = useState<string>("");
  
  const handleRejectClick = ( selected: string) => {
    setShowAlert(selected);
  }

  return (
    <>
      <div className={`${showAlert !== "" ? "m-auto w-2/5 border bg-white rounded-lg flex flex-col  justify-center" : "hidden"} `} >
        {showAlert && <AlertCard/>}
        < ApprovalButtons handleRejectClick={handleRejectClick} />
      </div>
       
      <div className=" m-auto w-2/5 border bg-white rounded-lg flex flex-col  justify-center">
        <CommentProp
          name="J.Mourinho"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XY9MzCu2BrYj8NXDw30GK-KEY_JowEunkj4XIHS1ovh1v4JibikC&usqp=CAE&s"
          createdAt="30/4/2005"
          comment="I'm the special one"
        />
        < ApprovalButtons handleRejectClick={handleRejectClick} />
       
      </div>

       <div className=" m-auto w-2/5 border bg-white rounded-lg flex flex-col  justify-center">
        <CommentProp
          name="R.D Matteo"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PvE_IFpzeJo0BZywvrOf761hX25qT1lmgA&usqp=CAU"
          createdAt="19/5/2012"
          comment="Me too !"
        />
        < ApprovalButtons handleRejectClick={handleRejectClick} />
       
      </div>
      
    </>
  );
};


export default ApprovalCard;
