import { useRum } from "@/shared/hooks/useRum";

const WebVitalMonitor = () => {
  const { metrics } = useRum();
  return (
    <div
      className="fixed bottom-4 right-4 p-4 bg-slate-900/90 text-white rounded-xl 
   shadow-2xl backdrop-blur-sm border border-slate-700 z-50 text-sm"
    >
      <h3 className="font-bold text-teal-400 mb-2 border-b border-slate-700 pb-1">
        Live Field Data (RUM)
      </h3>
      <ul className="space-y-1">
        <li>
          <span className="text-gray-400">LCP: </span>
          <span
            className={
              metrics.lcp && metrics.lcp.value < 2500
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {metrics.lcp ? `${Math.round(metrics.lcp.value)} ms` : "Waiting..."}
          </span>
        </li>
        <li>
          <span className="text-gray-400">INP: </span>
          <span
            className={
              metrics.inp && metrics.inp.value < 200
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {metrics.inp ? `${Math.round(metrics.inp.value)} ms` : "Waiting..."}
          </span>
        </li>
        <li>
          <span className="text-gray-400">CLS: </span>
          <span
            className={
              metrics.cls && metrics.cls.value < 0.1
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {metrics.cls ? metrics.cls.value.toFixed(3) : "Waiting..."}
          </span>
        </li>
      </ul>
    </div>
  );
};
export default WebVitalMonitor;
