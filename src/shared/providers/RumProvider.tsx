import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onCLS,
  onINP,
  onLCP,
  type MetricWithAttribution,
} from "web-vitals/attribution";
import type { VitalsPayload } from "../types/vitals";

interface RumContextType {
  metrics: VitalsState;
}

interface VitalsState {
  lcp: number | null;
  inp: number | null;
  cls: number | null;
}

const RumContext = createContext<RumContextType | undefined>(undefined);

export const RumProvider = ({ children }: { children: ReactNode }) => {
  const [metrics, setMetrics] = useState<VitalsState>({
    lcp: null,
    inp: null,
    cls: null,
  });
  useEffect(() => {
    const sendToAnalytics = (metric: MetricWithAttribution) => {
      const payload: VitalsPayload = {
        id: metric.id,
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        navigationType: metric.navigationType,
        attribution: metric.attribution,
      };
      /*
        ارسال امن داده‌ها بدون مسدود کردن ترد اصلی
       navigator.sendBeacon('/api/metrics', JSON.stringify(payload));
      */


      // آپدیت استیت برای نمایش در UI (صرفاً برای دیباگ در این مثال)
      setMetrics((prev) => ({
        ...prev,
        [metric.name.toLowerCase()]: payload,
      }));
    };

    // ثبت لیسنرها برای دریافت متریک‌ها
    onLCP(sendToAnalytics);
    onINP(sendToAnalytics);
    onCLS(sendToAnalytics);
  }, []);

  return (
    <RumContext.Provider value={{ metrics }}>{children}</RumContext.Provider>
  );
};

export const useRum = () => {
  const context = useContext(RumContext);
  if (!context) {
    throw new Error("useRum must be used within a RumToClientProvider");
  }
  return context;
};
