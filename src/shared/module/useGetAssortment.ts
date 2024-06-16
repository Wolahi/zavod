import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IAssortment } from "@/shared/config/interfaces/IAssortment.ts";

const useGetAssortment = () => {
  const [assortment, setAssortment] = useState<IAssortment[]>([]);

  const getObjs = async (): Promise<AxiosResponse<IAssortment[]>> => {
    return $api.get("/api/dictionary/assortment");
  };

  useEffect(() => {
    (async () => {
      const res = await getObjs();
      setAssortment(res.data);
    })();
  }, []);

  return { assortment, setAssortment };
};

export default useGetAssortment;
