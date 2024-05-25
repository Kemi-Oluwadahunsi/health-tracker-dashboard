import { useEffect, useRef, useContext } from "react";
import { Chart } from "chart.js/auto";
import { DataContext } from "../../hooks/DataContext";
import expand from "../../assets/expand.png";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";

const BpChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { data, loading, error } = useContext(DataContext);

  useEffect(() => {
    if (data && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const months = [];
      const systolicValues = [];
      const diastolicValues = [];

      if (data.diagnosis_history) {
        data.diagnosis_history.forEach((entry) => {
          months.push(`${entry.month} ${entry.year}`);
          systolicValues.push(entry.blood_pressure.systolic.value);
          diastolicValues.push(entry.blood_pressure.diastolic.value);
        });

        const chartData = {
          labels: months,
          datasets: [
            {
              label: "Systolic Blood Pressure",
              data: systolicValues,
              borderColor: "#C26EB4",
              backgroundColor: "#C26EB4",
              fill: false,
            },
            {
              label: "Diastolic Blood Pressure",
              data: diastolicValues,
              borderColor: "#7E6CAB",
              backgroundColor: "#7E6CAB",
              fill: false,
            },
          ],
        };

        const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 60,
              max: 180,
              ticks: {
                stepSize: 20,
                callback: function (value) {
                  return value;
                },
              },
            },
          },
        };

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: chartData,
          options: chartOptions,
        });
      }
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!data || !data.diagnosis_history) return <p>No data available</p>;

  // Findng the latest month entry
  const latestEntry = data.diagnosis_history.reduce((latest, current) => {
    const latestDate = new Date(`${latest.month} 1, ${latest.year}`);
    const currentDate = new Date(`${current.month} 1, ${current.year}`);
    return currentDate > latestDate ? current : latest;
  }, data.diagnosis_history[0]);

  return (
    <div className="bg-[#F4F0FE] p-4 flex xs:flex-col justify-between md:w-[30rem] gap-[2rem] rounded-2xl h-[20rem] xs:h-[40rem] sm:h-[30rem] md:h-[20rem] sm:flex-col">
      <div className="flex flex-col gap-[2rem] basis-[75%] md:basis-[50%] sm:basis-[65%]">
        <div className="flex justify-between">
          <h1 className="font-bold md:text-sm">Blood Pressure</h1>
          <div className="flex items-center gap-[0.5rem] font-medium md:text-sm">
            <p>Last 6 months</p>
            <img src={expand} alt="" />
          </div>
        </div>

        <div className="position-relative h-[15.6rem] width-[37.5rem]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>

      <div key={data.name} className="flex flex-col sm:flex-row gap-8 sm:gap-[4rem]">
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#C26EB4]"></div>
            <p className="font-bold">Systolic</p>
          </div>
          <p className="text-[2rem] md:text-[1.5rem] font-extrabold sm:text-[1.2rem] xs:text-[1.1rem]">
            {latestEntry.blood_pressure.systolic.value}
          </p>
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center">
              <img src={ArrowUp} alt="arrowup" />
            </div>

            <p className="md:text-sm">{latestEntry.blood_pressure.systolic.levels}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#7E6CAB]"></div>
            <p className="font-bold">Diastolic</p>
          </div>
          <p className="text-[2rem] md:text-[1.5rem] font-extrabold sm:text-[1.2rem] xs:text-[1.5rem]">
            {latestEntry.blood_pressure.diastolic.value}
          </p>
          <div className="flex gap-2">
            <div className="flex items-center justify-center">
              <img src={ArrowDown} alt="arrowdown" />
            </div>

            <p className="md:text-sm">{latestEntry.blood_pressure.diastolic.levels}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BpChart;
