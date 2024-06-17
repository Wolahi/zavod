import { ColumnsType } from "antd/es/table";

import { EType } from "@/shared/config/interfaces/EType.ts";
import { IStatsReport } from "@/shared/config/interfaces/IStatsReport.ts";
import { reportsTranslate } from "@/shared/config/reportsTranslate.ts";

export const columns: ColumnsType<IStatsReport> = [
  {
    key: "type",
    title: "Тип работ",
    dataIndex: "type",
    render: (value) => reportsTranslate[value as EType],
  },
  { key: "count", title: "Кол-во", dataIndex: "count" },
  { key: "normal", title: "Норма", dataIndex: "normal" },
  { key: "delta", title: "Дельта", dataIndex: "delta" },
  { key: "deltaPercent", title: "Дельта %", dataIndex: "deltaPercent" },
  { key: "positive", title: "Прогресс", dataIndex: "positive" },
];
