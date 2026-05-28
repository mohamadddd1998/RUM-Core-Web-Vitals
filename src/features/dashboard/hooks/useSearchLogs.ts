import { useEffect, useState, useTransition } from "react";
import useLogs, { type VitalLog } from "./useLogs";

const useSearchLogs = () => {
  const { logs } = useLogs();
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLogs, setFilteredLogs] = useState<VitalLog[]>([]);

  const handleQueryChange = (value: string) => {
    // فوری برای input
    setQuery(value);

    // کم‌اولویت برای فیلتر
    startTransition(() => {
      setSearchQuery(value);
    });
  };

  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();

    if (!q) {
      setFilteredLogs(logs);
      return;
    }

    setFilteredLogs(logs.filter((l) => l.name.toLowerCase().includes(q)));
  }, [logs, searchQuery]);

  return {
    isPending,
    query,
    filteredLogs,
    handleQueryChange,
  };
};

export default useSearchLogs;
