import useSearchLogs from "../hooks/useSearchLogs";
import {
  formatValue,
  getMetricStyle,
  getRatingStyle,
} from "../utils/vital-logs-table";

const VitalLogsTable = () => {
  const { filteredLogs, handleQueryChange, isPending, query } = useSearchLogs();
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      
      {/* Header */}
      <div className="border-b  border-slate-200 px-6 py-4 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-slate-900">Vital Logs Table</h2>
          <div className="flex items-center gap-2">
            {isPending ? (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                Updating…
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                {filteredLogs.length} rows
              </span>
            )}
          </div>
        </div>

        {/* Search input */}
        <div className="relative max-w-md mr-auto">
          <input
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search by name (مثلاً: LCP یا CLS یا INP)"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            aria-label="Search logs by name"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-6 py-4 font-semibold">ID</th>
              <th className="px-6 py-4 font-semibold">Metric</th>
              <th className="px-6 py-4 font-semibold">Value</th>
              <th className="px-6 py-4 font-semibold">Rating</th>
              <th className="px-6 py-4 font-semibold">Navigation Type</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="transition-colors duration-200 hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-mono text-xs text-slate-500">
                  {log.id}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getMetricStyle(
                      log.name,
                    )}`}
                  >
                    {log.name}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="font-mono text-base font-semibold text-slate-900">
                    {formatValue(log.name, log.value)}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${getRatingStyle(
                      log.rating,
                    )}`}
                  >
                    {log.rating}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-700">
                  {log.navigationType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredLogs.length === 0 && (
        <div className="px-6 py-10 text-center text-sm text-slate-500">
          هیچ لاگی برای نمایش وجود ندارد.
        </div>
      )}
    </div>
  );
};

export default VitalLogsTable;
