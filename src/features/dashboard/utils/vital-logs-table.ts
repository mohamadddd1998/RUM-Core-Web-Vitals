type VitalLog = {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  navigationType: string;
};

export const getRatingStyle = (rating: VitalLog["rating"]) => {
  switch (rating) {
    case "good":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "needs-improvement":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "poor":
      return "bg-rose-50 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-50 text-slate-700 border border-slate-200";
  }
};

export const getMetricStyle = (name: VitalLog["name"]) => {
  switch (name) {
    case "LCP":
      return "bg-sky-50 text-sky-700 border border-sky-200";
    case "CLS":
      return "bg-violet-50 text-violet-700 border border-violet-200";
    case "INP":
      return "bg-cyan-50 text-cyan-700 border border-cyan-200";
    default:
      return "bg-slate-50 text-slate-700 border border-slate-200";
  }
};

export const formatValue = (name: string, value: number) => {
  if (name === "CLS") return value.toFixed(3);
  return Math.round(value);
};