import { useEffect, useState } from "react";

export type VitalLog = {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  navigationType: string;
};

const useLogs = () => {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [logs, setLogs] = useState<VitalLog[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      setIsloading(true);
      try {
        const response = await fetch("http://localhost:3000/logs");
        if (!response.ok) throw new Error("error");
        const result = await response.json();
        setLogs(result);
      } catch {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    };
    fetchLogs();
  }, []);

  return { logs, isLoading, isError };
};
export default useLogs;
