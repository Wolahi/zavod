import { useMemo, useState } from "react";
import dayjs from "dayjs";

import { EType } from "@/shared/config/interfaces/EType.ts";
import { IPieData } from "@/shared/config/interfaces/IPieData.ts";
import { translateReportType } from "@/shared/config/translateReportType.ts";
import useGetStats from "@/widgets/ReportTable/module/useGetStats.ts";

const useGetPieChart = () => {
  const [timeState, setTimeState] = useState<string[]>([]);
  const { data, getStats } = useGetStats();

  const pieData = useMemo(
    () =>
      data?.map(
        (el): IPieData => ({
          country: translateReportType[el.type as EType],
          sales: el.count,
        }),
      ),
    [data],
  );

  const handleDatePicker = async (data: string[]) => {
    const [dateAt, dateTo] = data;
    setTimeState([
      dayjs(dateAt).format("YYYY-MM-DD"),
      dayjs(dateTo).format("YYYY-MM-DD"),
    ]);
    if (dateAt && dateTo) {
      await getStats(
        dayjs(dateAt).format("YYYY-MM-DD"),
        dayjs(dateTo).format("YYYY-MM-DD"),
      );
    }
  };

  return { timeState, setTimeState, handleDatePicker, pieData };
};

export default useGetPieChart;
