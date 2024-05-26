import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: "Basic " + btoa("coalition:skills-test"),
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setAllData(result);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const fetchPatientData = async (name) => {
    setLoading(true);
    try {
      const patient = allData.find((p) => p.name === name);
      if (!patient) {
        throw new Error("Patient not found");
      }

      //Getting the current date and date 6 months ago
      const currentDate = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(currentDate.getMonth() - 8);

      // Filtering diagnosis history for the last 6 months
      const filteredDiagnosisHistory = patient.diagnosis_history.filter(
        (entry) => {
          const entryDate = new Date(`${entry.month} 1, ${entry.year}`);
          return entryDate >= sixMonthsAgo;
        }
      );
      const filteredPatient = {
        ...patient,
        diagnosis_history: filteredDiagnosisHistory,
      };

      setSelectedPatient(filteredPatient);
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{ allData, selectedPatient, loading, error, fetchPatientData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
