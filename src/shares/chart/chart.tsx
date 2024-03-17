import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const dateCurrent = "03-10 April, 2024";
const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "bar",
        height: "300",
        zoom: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Total list",
          data: [3, 4, 9, 5, 10, 6, 7],
        },
      ],
      xaxis: {
        categories: ["Mon", "Tue", "Wes", "Thu", "Fri", "Sat", "Sun"],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy(); // Cleanup chart on unmount
  }, []);

  return (
    <>
      <p className="text-gray text-center opacity-50 tracking-wider">
        {dateCurrent}
      </p>
      <div className="w-full h-[20vh]  my-1" ref={chartRef}></div>
    </>
  );
};

export default Chart;
