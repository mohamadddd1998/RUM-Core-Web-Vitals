import { useEffect, useState } from "react";
import useLogs from "./useLogs";

interface IAvgMetrics {
  LCP: number;
  CLS: number;
  INP: number;
}

const useReportLogs = () => {
  const { isLoading, logs } = useLogs();
  const [avgMetrics, setAvgMetrics] = useState<IAvgMetrics>({
    LCP: 0,
    CLS: 0,
    INP: 0,
  });

  useEffect(() => {
    if (logs.length === 0) return;

    // تکنیک setTimeout: محاسبات سنگین را از جریان اصلی رندر خارج می‌کنیم
    const timer = setTimeout(() => {
      const totalMetrics = logs.reduce(
        (acc, log) => {
          if (acc[log.name as keyof typeof acc]) {
            acc[log.name as keyof typeof acc].sum += log.value;
            acc[log.name as keyof typeof acc].count += 1;
          }
          return acc;
        },
        {
          LCP: { sum: 0, count: 0 },
          CLS: { sum: 0, count: 0 },
          INP: { sum: 0, count: 0 },
        },
      );

      setAvgMetrics({
        LCP: totalMetrics.LCP.count
          ? totalMetrics.LCP.sum / totalMetrics.LCP.count
          : 0,
        CLS: totalMetrics.CLS.count
          ? totalMetrics.CLS.sum / totalMetrics.CLS.count
          : 0,
        INP: totalMetrics.INP.count
          ? totalMetrics.INP.sum / totalMetrics.INP.count
          : 0,
      });
    }, 0); // اجرای غیرهمزمان

    return () => clearTimeout(timer);
  }, [logs]);

  return { avgMetrics, isLoading };
};
export default useReportLogs;
