import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { $api } from "@/shared/api/apiInstance.ts";
import { IDepartamentOutput } from "@/shared/config/interfaces/IDepartamentOutput.ts";

const useGetDepartment = () => {
  const [department, setDepartment] = useState<IDepartamentOutput[]>([]);

  const getDepartment = async (): Promise<
    AxiosResponse<IDepartamentOutput[]>
  > => {
    return await $api.get("/api/department");
  };

  useEffect(() => {
    (async () => {
      const req = await getDepartment();
      setDepartment(req.data);
    })();
  }, []);

  return { department, setDepartment };
};

export default useGetDepartment;
