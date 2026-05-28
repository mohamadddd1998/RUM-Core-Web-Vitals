interface ILogCard {
  name: "LCP" | "CLS" | "INP";
  value: number | string;
}
const LogCard = ({ name, value }: ILogCard) => (
  <div className="relative bg-white border shadow-lg  border-gray-100 p-6 rounded-xl overflow-hidden group">
    {/* Accent Line */}
    <div className="absolute left-0 top-0 w-1.5 h-full bg-sky-500 transition-all group-hover:bg-emerald-400" />

    <div className="text-gray-600 text-xs font-semibold uppercase tracking-wider">
      {name} Average
    </div>
    <div className="flex items-baseline gap-1 my-3">
      <span className="font-mono text-4xl font-bold text-slate-500">{value}</span>
      <span className="text-slate-500 text-sm font-medium">
        {name === "CLS" ? "" : "ms"}
      </span>
    </div>
  </div>
);
export default LogCard;
