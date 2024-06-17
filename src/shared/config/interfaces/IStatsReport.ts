import { EType } from "@/shared/config/interfaces/EType.ts";

export interface IStatsReport {
  type: EType;
  count: number;
  normal: number;
  delta: number;
  deltaPercent: number;
  positive: string;
}
