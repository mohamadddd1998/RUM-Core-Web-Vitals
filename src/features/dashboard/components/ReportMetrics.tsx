import { useRum } from "@/shared/hooks/useRum";
import { MetricCard } from "../components/MetricCard";

const ReportMetrics = () => {
  const { metrics } = useRum();

  return (
    <div className="p-8 bg-gray-50 rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Real User Monitoring (RUM)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/**LCP */}
        <MetricCard
          name={"LCP"}
          value={metrics.lcp ? metrics.lcp.value : 0}
          unit={"ms"}
          rating={metrics.lcp ? metrics.lcp.rating : " - "}
        />
        {/**CLS */}
        <MetricCard
          name={"CLS"}
          value={metrics.cls ? metrics.cls.value : 0}
          unit={""}
          rating={metrics.cls ? metrics.cls.rating : " - "}
        />
        {/**INP */}
        <MetricCard
          name={"INP"}
          value={metrics.inp ? metrics.inp.value : 0}
          unit={"ms"}
          rating={metrics.inp ? metrics.inp.rating : " - "}
        />
      </div>
    </div>
  );
};

export default ReportMetrics;
