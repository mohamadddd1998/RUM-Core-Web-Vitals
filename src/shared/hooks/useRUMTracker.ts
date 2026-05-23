// hooks/useRUMTracker.ts
import { useEffect } from "react";
import {
  onCLS,
  onINP,
  onLCP,
  type MetricWithAttribution,
} from "web-vitals/attribution";
import { type VitalsPayload } from "../types/vitals";

const RUM_API_ENDPOINT = "http://localhost:3000/logs";

const sendToAnalytics = (metric: MetricWithAttribution) => {
  const payload: VitalsPayload = {
    id: metric.id,
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    navigationType: metric.navigationType,
    attribution: metric.attribution,
  };

  // ارسال داده به بک‌اند با استفاده از sendBeacon برای اطمینان از ارسال هنگام خروج از صفحه

  // const blob = new Blob([JSON.stringify(payload)], {
  //   type: "application/json",
  // });
  // navigator.sendBeacon(RUM_API_ENDPOINT, blob);

  fetch(RUM_API_ENDPOINT, {
    body: JSON.stringify(payload),
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
  });

  // سیستم Alert: اگر INP یا LCP وضعیت poor داشته باشند
  if (
    metric.rating === "poor" &&
    (metric.name === "INP" || metric.name === "LCP")
  ) {
    console.error(
      `🚨 [ALERT] Critical ${metric.name} detected: $${Math.round(metric.value)}$ms`,
    );
    // در یک سیستم واقعی، اینجا یک ریکوئست به سرویس‌هایی مثل Slack یا PagerDuty ارسال می‌شود
  }
};

export const useRUMTracker = () => {
  useEffect(() => {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onLCP(sendToAnalytics);
  }, []);
};
