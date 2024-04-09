import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import moment from "moment";
import { getAllTask } from "../../func-task-user/taskFunction";
import Task from "../../interfaces/task";
import toast from "react-hot-toast";


const startDayWeekFormat = moment().startOf('week').add(1, 'days').format("DD-MM-YYYY");
const endDayWeekFormat = moment().endOf('week').add(1,'days').format("DD-MM-YYYY");
const listDayWeek: string[] = [];
const startDayWeek = moment().startOf('week').add(1,'days');
const endDayWeek = moment().endOf('week').add(1,'days');

let currentDay = startDayWeek.clone();
while(currentDay.isSameOrBefore(endDayWeek, 'day')){
  listDayWeek.push(currentDay.format('DD-MM-YYYY'));
  currentDay.add(1, 'day')
}
// console.log(listDayWeek);


const Chart = () => {
  const chartRef = useRef(null);
  const listQuality: number[] = [];
  useEffect(() => {
    const getQualityDay = async () => {
      const listTasks: Task[] = await getAllTask();
      if(!listTasks){
        toast.loading("Loading quality task");
        
      } else{
        listDayWeek.forEach(element => {
          const count = listTasks.filter( task => task.task_deadline === element ).length;
          listQuality.push(count);
        });
        // console.log(listQuality);
        
        return listQuality;
      }
    }
    getQualityDay();
    
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
          data:  listQuality,
          // , [3,4,5,6,7,8,9] 
        },
      ],
      xaxis: {
        categories: ["Mon", "Tue", "Wes", "Thu", "Fri", "Sat", "Sun"],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy(); // Cleanup chart on unmount
  }, [listQuality]);

  return (
    <>
      <p className="text-gray flex flex-row opacity-50 tracking-wider my-5 ">
            Week-current: {startDayWeekFormat} to {endDayWeekFormat}
      </p>
      <div className="w-full h-[20vh]  my-1" ref={chartRef}></div>
    </>
  );
};

export default Chart;
