import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/apiInstance.ts';
import { IDepartamentOutput } from '@/shared/config/interfaces/IDepartamentOutput.ts';

const useGetDepartmentById = (departmentId: number) => {
  const [department, setDepartment] = useState<IDepartamentOutput>();

  const getDepartmentById = useCallback(async (): Promise<
    AxiosResponse<IDepartamentOutput>
  > => {
    return await $api.get(`/api/department/${departmentId}`);
  }, [departmentId]);

  useEffect(() => {
    (async () => {
      const req = await getDepartmentById();
      setDepartment(req.data);
    })();
  }, [departmentId, getDepartmentById]);

  return { department, setDepartment };
};

export default useGetDepartmentById;
