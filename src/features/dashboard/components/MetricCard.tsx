export const MetricCard = ({
  name,
  value,
  unit,
  rating,
}: {
  name: string;
  value: number;
  unit: string;
  rating: string;
}) => {
  const color =
    rating === "good"
      ? "text-green-500"
      : rating === "needs-improvement"
        ? "text-yellow-500"
        : "text-red-500";

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col        items-center">
      <h3 className="text-gray-600 font-bold mb-2">{name}</h3>
      <div className={`text-3xl font-extrabold ${color}`}>
        {value.toFixed(2)}{" "}
        <span className="text-sm text-gray-400">{unit}</span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-wider text-gray-400">
        {rating}
      </span>
    </div>
  );
};
