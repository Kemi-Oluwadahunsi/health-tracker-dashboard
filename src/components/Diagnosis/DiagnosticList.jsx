import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../hooks/DataContext";

const DiagnosticList = () => {
  const { selectedPatient, loading, error } = useContext(DataContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!selectedPatient) return <p>Patient not found</p>;


  return (
    <div className="bg-white py-[1rem] px-4 rounded-2xl ">
      <div className="flex flex-col gap-8 sm:gap-4">
        <h1 className="text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] font-bold">
          Diagnostic List
        </h1>

        <div className="custom-scrollbar max-h-[12rem] sm:max-h-[10rem] xs:max-h-[20rem] overflow-y-auto">
          {!isMobile ? (
            <table className="w-full">
              <thead className="w-full ">
                <tr className=" bg-[#F6F7F8] rounded-r-3xl w-full">
                  <th className="text-left pl-4 py-[1rem] rounded-l-3xl">
                    Problem/Diagnosis
                  </th>
                  <th className="text-left pl-[3rem] py-[1rem] md:pl-[2rem] sm:pl-[1rem] ">
                    Description
                  </th>
                  <th className="text-left pl-4 py-[1rem] rounded-r-3xl">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {selectedPatient.diagnostic_list.map((diagnostic, index) => (
                  <tr key={index} className="md:text-sm sm:text-xs">
                    <td className=" h-[3rem] pl-4 ">{diagnostic.name}</td>
                    <td className="h-[3rem] pl-[3rem] md:pl-0 sm:pl-0">
                      {diagnostic.description}
                    </td>
                    <td className=" h-[3rem] pl- md:pl-0 sm:pl-0 ">
                      {diagnostic.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col gap-4">
              {selectedPatient.diagnostic_list.map((diagnostic, index) => (
                <div key={index} className="border-b py-2 flex flex-col gap-2">
                  <div className="font-bold">Problem/Diagnosis:</div>
                  <div>{diagnostic.name}</div>
                  <div className="font-bold">Description:</div>
                  <div>{diagnostic.description}</div>
                  <div className="font-bold">Status:</div>
                  <div>{diagnostic.status}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
