import { Loader } from "lucide-react";

const LoadingFallback = () => (
  <div className="w-full flex justify-center items-center">
    <Loader className="animate-spin text-primary" />
  </div>
);
export default LoadingFallback;
