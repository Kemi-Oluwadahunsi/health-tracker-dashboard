import search from "../../assets/search.svg";
import moreh from "../../assets/moreh.png";
import { useContext, useState } from "react";
import { DataContext } from "../../hooks/DataContext";
const Index = ({onPatientClick}) => {
  const { allData, loading, error, fetchPatientData } = useContext(DataContext);
   const [focusedPatient, setFocusedPatient] = useState(null);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;

  const handlePatientClick = (name) => {
    setFocusedPatient(name);
    fetchPatientData(name);
    onPatientClick();
  };

  return (
    <div className="bg-[#fff] rounded-2xl px-4 py-8 custom-scrollbar max-h-[69rem] md:max-h-[65rem] xs:mah-h-[60rem] overflow-y-auto">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="text-[1.5rem] md:text-[1.2rem] xs:text-[1.2rem] font-bold">Patients</h2>
          <img src={search} alt="search" />
        </div>

        <div className="flex flex-col gap-8 md:gap-8 cursor-pointer ">
          {allData.map((patient) => (
            <div
              key={patient.name}
              className={`flex w-full justify-between ${
                focusedPatient === patient.name ? "bg-[#D8FCF7] " : ""
              }`}
              onClick={() => handlePatientClick(patient.name)}
            >
              <div>
                <img
                  src={patient.profile_picture}
                  alt="image"
                  className="w-[80%] md:w-[60%] sm:w-[40%] xs:w-[50%]"
                />
              </div>

              <div className=" basis-[60%] md:basis-[70%] flex flex-col justify-center md:-ml-4 sm:-ml-10">
                <h2 className="font-bold md:text-[0.8rem] sm:text-[0.7rem] text-left ">
                  {patient.name}
                </h2>
                <p>
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <div className="flex items-center sm:w-[10%]">
                <img src={moreh} alt="moreh" className="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
