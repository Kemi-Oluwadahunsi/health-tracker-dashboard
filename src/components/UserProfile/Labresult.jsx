import { useContext } from "react";
import { DataContext } from "../../hooks/DataContext";
import download from "../../assets/download.svg";

const Labresult = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!data || !data.lab_results) return null;
  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[2rem] md:text-[1.5rem]">Lab Results</h1>

        <div className="flex flex-col gap-5 md:gap-7">
          {data.lab_results.map((result, index) => (
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
