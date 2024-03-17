import Chart from "../../shares/chart/chart";
import HeadOfBoard from "../../shares/headOfBoard/headOfBoard";

const listOverView = [
  { id: 1, name: "Total of list", number: 15 },
  { id: 2, name: "Total of immediate", number: 3 },
  { id: 3, name: "Total of done", number: 10 },
];

const OverView = () => {
  return (
    <>
      <div className="h-auto">
        <HeadOfBoard />

        <Chart />

        <div className="flex flex-wrap space-x-3 justify-center">
          {listOverView.map((box: any, id: number) => (
            <div
              key={id}
              className={`${
                box.id === 1
                  ? "text-green-500"
                  : box.id === 2
                  ? "text-red-500"
                  : "text-yellow-500"
              } flex flex-col space-y-2  border-2 rounded-lg  w-60 h-40 items-center justify-center font-bold `}
            >
              <p className="text-6xl">{box.number}</p>
              <p className="text-2xl">{box.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OverView;
