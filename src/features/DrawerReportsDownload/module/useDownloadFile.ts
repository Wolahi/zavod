import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";

const useDownloadFile = () => {
  const getXLSXOneDay = async (
    date: string,
  ): Promise<AxiosResponse<{ url: string; uuid: string }>> => {
    return await $api.get("/api/report/files", {
      params: {
        date,
      },
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
  };

  const getXLSXFull = async (
    date: string,
  ): Promise<AxiosResponse<{ url: string; uuid: string }>> => {
    return await $api.get("/api/report/files/full", {
      params: {
        date,
      },
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
  };

  return { getXLSXOneDay, getXLSXFull };
};

export default useDownloadFile;
