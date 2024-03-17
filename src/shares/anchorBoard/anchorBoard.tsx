import { Link } from "react-router-dom";
import { FC, useState } from "react";
import "./anchorBoard.css";

interface Path {
  name: string;
  path: string;
}
const labPaths: Path[] = [
  { name: "Overview", path: "overview" },
  { name: "Today", path: "today" },
  { name: "Week", path: "week" },
  { name: "Month", path: "month" },
];

const AnchorLab: FC = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClicked = (index: number | null) => {
    // console.log(" -----");
    // console.log(index+" before");
    // console.log(clickedIndex+" before");
    setClickedIndex(clickedIndex !== index ? index : null);
    // console.log(clickedIndex+" after");
    // console.log(index+" after");
  };

  return (
    <>
      {labPaths.map((labPath: any, index: number) => (
        <Link
          key={index}
          to={labPath.path}
          className={` ${
            index === clickedIndex ? "active" : ""
          } flex justify-start space-x-5 my-10 items-center pl-20 text-xl`}
          onClick={() => handleClicked(index)}
        >
          {/* <img
            className="w-6"
            src="https://cdn-icons-png.flaticon.com/128/3767/3767094.png"
            alt=""
          /> */}
          <p
            className={` ${
              index === clickedIndex ? "active" : ""
            } tracking-wider opacity-50`}
          >
            {labPath.name}
          </p>
        </Link>
      ))}
    </>
  );
};
export default AnchorLab;
