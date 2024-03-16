import React, { FC } from "react";

const AlertCard: FC = () => {
  // console.log(handleClick);
  return (
    <>
      <div className="p-5 px-10">
        <h2 className="font-bold">Warning!</h2>
        <p>Are you sure to do this?</p>
      </div>
    </>
  );
};

export default AlertCard;
