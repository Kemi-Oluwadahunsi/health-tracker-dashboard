import { useContext, useState } from "react";
import Sidebar from "../Sidebar/index";
import Diagnosis from "../Diagnosis/index";
import UserProfile from "../UserProfile/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../hooks/DataContext";

const Dashboard = () => {
  const { selectedPatient, loading, error } = useContext(DataContext);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);

  const handlePatientClick = () => {
    setIsDiagnosisOpen(true);
  };

  const handleDiagnosisClose = () => {
    setIsDiagnosisOpen(false);
  };

  return (
    <div className="pt-16 sm:pt-8 xs:pt-8">
      <div className="flex gap-[0.5rem]">
        <div
          className={`basis-[22%] md:basis-[30%] sm:basis-[35%] xs:basis-[100%]`}
        >
          <Sidebar onPatientClick={handlePatientClick} />
        </div>
        <div className={`basis-[57%] md:basis-[40%] sm:basis-[65%] xs:hidden`}>
          {selectedPatient && <Diagnosis patient={selectedPatient} />}
        </div>
        <div className={`basis-[20%] md:basis-[29%] sm:hidden xs:hidden`}>
          <UserProfile />
        </div>
      </div>

      {isDiagnosisOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto sm:hidden md:hidden lg:hidden">
          <div className="bg-white p-4 rounded-xl w-[90%] md:w-[70%] max-w-[500px] mt-10 relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white text-[1rem] px-2 rounded-full"
              onClick={handleDiagnosisClose}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            {selectedPatient && <Diagnosis patient={selectedPatient} />}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
