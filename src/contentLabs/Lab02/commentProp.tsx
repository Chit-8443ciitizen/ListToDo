import { FC } from "react";
import './Lab02.css'
interface CommentProps{
    name: string,
    imageUrl: string,
    createdAt: string,
    comment: string
  }
const CommentProp:FC<CommentProps> = ({name, imageUrl, createdAt, comment}) => {
    return (
    <>
        <div className="w-full  ">
          <div className="m-auto flex items-center justify-center space-x-2 bg-white bg-opacity-50 w-[300px] rounded p-2">
            <img
              className="rounded-full w-10 h-10"
              src={imageUrl}
              alt=""
            />
            <div>
              <div className="flex items-center space-x-1">
                <p className="text-xl font-semibold">{name}</p>
                <p className="opacity-50"> at {createdAt}</p>
              </div>
              <div>{comment}</div>
            </div>
          </div>
        </div>
    </>
    )
    
}
export default  CommentProp
