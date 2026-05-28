import { useContext } from "react";
import { RumContext } from "../contexts/RumContext";

export const useRum = () => {
  const context = useContext(RumContext);
  if (!context) {
    throw new Error("useRum must be used within a RumToClientProvider");
  }
  return context;
};
