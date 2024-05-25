import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            // Replace with your actual endpoint
            headers: {
              Authorization: "Basic " + btoa("coalition:skills-test"),
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response:", response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        console.log("Content-Type:", contentType);

        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`Expected JSON but received ${contentType}`);
        }

        const result = await response.json();
        console.log("Result:", result);
        setAllData(result);

        const patient = result.find((p) => p.name === "Jessica Taylor");

        if (!patient) {
          throw new Error("Patient not found");
        }

        // Getting the current date and date 6 months ago
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

        setData(filteredPatient);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, allData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
