import { useContext } from "react";
import { DataContext } from "../../hooks/DataContext";
import download from "../../assets/download.svg";

const Labresult = () => {
  const { selectedPatient, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!selectedPatient) return <p>Patient not found</p>;
  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[2rem] md:text-[1.5rem]">Lab Results</h1>

        <div className="flex flex-col gap-5 md:gap-7 custom-scrollbar max-h-[9rem] sm:max-h-[10rem] xs:max-h-[20rem] overflow-y-auto">
          {selectedPatient.lab_results.map((result, index) => (
            <div key={index} className="flex justify-between items-center">
              <p>{result}</p>
              <img src={download} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labresult;
