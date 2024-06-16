import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IReport } from "@/shared/config/interfaces/IReport.ts";

const useGetReportsList = () => {
  const [reports, setReports] = useState<IReport[]>([]);

  const getReports = async (): Promise<AxiosResponse<IReport[]>> => {
    return $api.get("/api/reporting");
  };

  useEffect(() => {
    (async () => {
      const res = await getReports();
      setReports(res.data);
    })();
  }, []);

  return { reports, setReports };
};

export default useGetReportsList;
