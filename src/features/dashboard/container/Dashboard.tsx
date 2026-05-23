import { useRum } from "@/shared/providers/RumProvider";
import { MetricCard } from "../components/MetricCard";

const Dashboard = () => {
  const { metrics } = useRum();

  const renderMetricsCard = () =>
    Object.keys(metrics).map((m, i) => {
      const metric = metrics[m];
      if (metric == null)
        return (
          <MetricCard
            key={i}
            name={m}
            value={0}
            unit={m === "CLS" ? "" : "ms"}
            rating={" - "}
          />
        );
      return <MetricCard key={metric.id} {...metric} />;
    });

  return (
    <div className="p-8 bg-gray-50 rounded-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Real User Monitoring (RUM) Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderMetricsCard()}
      </div>
    </div>
  );
};

export default Dashboard;
