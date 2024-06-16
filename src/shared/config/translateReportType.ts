import { EReportType } from "@/shared/config/interfaces/EReportType.ts";

export const translateReportType: Record<EReportType, string> = {
  [EReportType.Assembly]: "Сборка",
  [EReportType.Welding]: "Сварка",
  [EReportType.Loading]: "Загрузка",
};
