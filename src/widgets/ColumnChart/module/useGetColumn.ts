import { useEffect, useMemo, useState } from "react";

import useGetStats from "@/widgets/ReportTable/module/useGetStats.ts";

const useGetColumn = () => {
  const [timeState, setTimeState] = useState<string[]>([]);
  const { objData, getObjStats } = useGetStats();

  const columnData = useMemo(
    () =>
      objData?.map((el) => ({
        country: el.name,
        value: el.count,
      })),
    [objData],
  );

  useEffect(() => {
    (async () => await getObjStats())();
  }, []);

  return { timeState, setTimeState, columnData };
};

export default useGetColumn;
