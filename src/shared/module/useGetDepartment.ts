import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/apiInstance.ts';
import { IDepartamentOutput } from '@/shared/config/interfaces/IDepartamentOutput.ts';

const useGetDepartment = () => {
  const [department, setDepartment] = useState<IDepartamentOutput[]>([]);

  const getDepartments = async (): Promise<
    AxiosResponse<IDepartamentOutput[]>
  > => {
    return await $api.get('/api/department');
  };

  useEffect(() => {
    (async () => {
      const req = await getDepartments();
      setDepartment(req.data);
    })();
  }, []);

  return { department, setDepartment };
};

export default useGetDepartment;
