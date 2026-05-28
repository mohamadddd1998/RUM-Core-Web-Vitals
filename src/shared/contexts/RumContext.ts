import { createContext } from "react";
import type { VitalsState } from "../providers/RumProvider";

interface RumContextType {
  metrics: VitalsState;
}

export const RumContext = createContext<RumContextType | undefined>(undefined);
