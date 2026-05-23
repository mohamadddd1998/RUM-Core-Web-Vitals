// types/vitals.ts
export interface VitalsPayload {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  navigationType: string;
  attribution?: Record<string, any>;
}
