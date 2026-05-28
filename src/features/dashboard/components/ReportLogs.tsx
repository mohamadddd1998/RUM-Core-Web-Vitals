import useReportLogs from "../hooks/useReportLogs";
import LogCard from "./LogCard";
import LoadingFallback from "@/shared/components/loading/LoadingFallback";

const ReportLogs = () => {
  const { avgMetrics, isLoading } = useReportLogs();

  return (
    <div className="p-8 bg-gray-50 rounded-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Report Logs</h1>
      {isLoading ? (
        <LoadingFallback />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6">
          <LogCard name="CLS" value={avgMetrics.CLS.toFixed(3)} />
          <LogCard name="LCP" value={avgMetrics.LCP.toFixed(3)} />
          <LogCard name="INP" value={avgMetrics.INP.toFixed(3)} />
        </div>
      )}
    </div>
  );
};
export default ReportLogs;
