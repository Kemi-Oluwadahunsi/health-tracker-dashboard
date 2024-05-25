import temperature from "../../assets/temperature.svg";
import respiratory from "../../assets/respiratory.svg";
import HeartBPM from "../../assets/HeartBPM.svg";
import { useContext } from "react";
import { DataContext } from "../../hooks/DataContext";

const Rate = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const marchData = data.diagnosis_history.find(
    (entry) => entry.month === "March" && entry.year === 2024
  );

  if (!marchData) return <p>No data available for March 2024</p>;

  return (
    <div className="p-2">
      <div key={data.name}>
        <div className="flex xs:flex-col xs:gap-8 justify-between items-center">
          <div className="bg-[#E0F3FA] basis-[30%] xs:w-[100%] h-[15rem] md:h-[14rem] sm:h-[12rem] px-4 md:px-2 justify-center xs:items-center pb-4 pt-4 md:pt-2 flex flex-col gap-4 rounded-xl">
            <div>
              <img
                src={respiratory}
                alt="respiratory"
                className="md:w-[60%] sm:w-[50%] xs:w-[60%] xs:mx-auto"
              />
            </div>

            <div>
              <p className="md:text-sm">Respiratory Rate</p>
              <h2 className="font-extrabold text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] xs:text-[1.5rem]">
                {marchData.respiratory_rate.value} bpm
              </h2>
            </div>

            <p>{marchData.respiratory_rate.levels}</p>
          </div>

          <div className="bg-[#FFE6F1] basis-[30%] xs:w-[100%] h-[15rem] md:h-[14rem] sm:h-[12rem] px-4 justify-center xs:items-center pb-4 pt-4 md:pt-0 flex flex-col gap-4 rounded-xl">
            <div>
              <img src={temperature} alt="temperature" className="md:w-[60%] sm:w-[50%] xs:w-[60%] xs:mx-auto" />
            </div>
            <div>
              <p>Temperature</p>
              <h2 className="font-extrabold text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] xs:text-[1.5rem]">
                {marchData.temperature.value}°F
              </h2>
            </div>

            <p>{marchData.temperature.levels}</p>
          </div>

          <div className="bg-[#FFE6E9] basis-[30%] xs:w-[100%] h-[15rem] md:h-[14rem] sm:h-[12rem] px-4 justify-center xs:items-center pb-4 pt-4 flex flex-col gap-4 rounded-xl">
            <div>
              <img src={HeartBPM} alt="HeartBPM" className="md:w-[60%] sm:w-[50%] xs:w-[60%] xs:mx-auto" />
            </div>

            <div>
              <p>Heart Rate</p>
              <h2 className="font-extrabold text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] xs:text-[1.5rem]">
                {marchData.heart_rate.value} bpm
              </h2>
            </div>

            <p>{marchData.heart_rate.levels}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
