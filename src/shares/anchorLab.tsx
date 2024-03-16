import { Link } from "react-router-dom";
import { FC, useState } from "react";
import "./anchorLab.css";

interface Path {
  name: string;
  path: string;
}
const labPaths: Path[] = [
  { name: "lab01", path: "/lab01" },
  { name: "lab02", path: "/lab02" },
  { name: "lab03", path: "/lab03" },
  // { name: "lab04", path: "/lab04" },
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
          } flex justify-start space-x-5 my-2 items-center bg-white bg-opacity-5 rounded-md p-2 `}
          onClick={() => handleClicked(index)}
        >
          <img
            className="w-6"
            src="https://cdn-icons-png.flaticon.com/128/3767/3767094.png"
            alt=""
          />
          <p>{labPath.name}</p>
        </Link>
      ))}
    </>
  );
};
export default AnchorLab;
