import { useState } from "react";
import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IStatsReport } from "@/shared/config/interfaces/IStatsReport.ts";

const useGetStats = () => {
  const [data, setData] = useState<IStatsReport[]>();
  const [objData, setObjData] = useState<any[]>([]);

  const getStats = async (dateAt: string, dateTo: string): Promise<void> => {
    const res: AxiosResponse<IStatsReport[]> = await $api.get(
      "/api/stats/dstamp",
      {
        params: {
          dateStart: dateAt,
          dateEnd: dateTo,
        },
      },
    );

    setData(res.data);
  };

  const getObjStats = async (): Promise<void> => {
    const res: AxiosResponse<IStatsReport[]> = await $api.get(
      "/api/stats/stats-objects",
    );

    setObjData(res.data);
  };

  const getXlsx = async (
    dateAt: string,
    dateTo: string,
  ): Promise<AxiosResponse<{ url: string; uuid: string }>> => {
    return await $api.get("/api/report/files/stamp", {
      params: {
        dateStart: dateAt,
        dateEnd: dateTo,
      },
    });
  };

  const getXlsxDep = async (
    dateAt: string,
    dateTo: string,
    depId: number,
  ): Promise<AxiosResponse<{ url: string; uuid: string }>> => {
    return await $api.get("/api/report/files/department", {
      params: {
        dateStart: dateAt,
        dateEnd: dateTo,
        departId: depId,
      },
    });
  };

  return { objData, data, getStats, getXlsx, getXlsxDep, getObjStats };
};

export default useGetStats;
