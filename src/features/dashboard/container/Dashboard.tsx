import ReportLogs from "../components/ReportLogs";
import ReportMetrics from "../components/ReportMetrics";
import VitalLogsTable from "../components/VitalLogsTable";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <ReportMetrics />
      <ReportLogs />
      <VitalLogsTable />
    </div>
  );
};

export default Dashboard;
