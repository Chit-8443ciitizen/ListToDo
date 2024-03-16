import { FC } from "react";
import Comment from "./comment";
import CommentProp from "./commentProp";
import  ApprovalCard from "./approvalCard";
import Geolocation from "./geolocation";
import './Lab02.css'
const Lab02: FC = () => {
  

  return (
    <div className="space-y-2 p-3">
      <div>
        <h3>Bài 01</h3>
        <div className="pl-5 space-y-1">
          <Comment />
        </div>
      </div>
      <hr />

      <div>
        <h3>Bài 02</h3>
        <div className="pl-5 space-y-1">
          <CommentProp
            name="J.Mourinho"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XY9MzCu2BrYj8NXDw30GK-KEY_JowEunkj4XIHS1ovh1v4JibikC&usqp=CAE&s"
            createdAt="30/4/2005"
            comment="I'm the special one"
          />
          <CommentProp
            name="R.D Matteo"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PvE_IFpzeJo0BZywvrOf761hX25qT1lmgA&usqp=CAU"
            createdAt="19/5/2012"
            comment="Me too !"
          />
          <CommentProp
            name="D. Grogba"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIlkjFW_e_afxkrE8VY93B4xjW9bT1nhD-Q&usqp=CAU"
            createdAt="19/5/2012"
            comment="Yes sirs"
          />
        </div>
      </div>
      <hr />

      <div>
        <h3>Bài 03</h3>
        <div className="pl-5 space-y-1">
          {/* <Comment/> */}
          <ApprovalCard/>
          
        </div>
      </div>
      <hr />

      <div>
        <h4>Bài 04</h4>
        <div className="pl-5 space-y-1">
          <Geolocation/>
        </div>
      </div>

    </div>
  );
};

export default Lab02;
