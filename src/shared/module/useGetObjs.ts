import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IObject } from "@/shared/config/interfaces/IObject.ts";

const useGetObjs = () => {
  const [objs, setObjs] = useState<IObject[]>([]);

  const getObjs = async (): Promise<AxiosResponse<IObject[]>> => {
    return $api.get("/api/dictionary/objects");
  };

  useEffect(() => {
    (async () => {
      const res = await getObjs();
      setObjs(res.data);
    })();
  }, []);

  return { objs, setObjs };
};

export default useGetObjs;
