import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/apiInstance.ts';
import { IAssortmentOutput } from '@/shared/config/interfaces/IAssortmentOutput';

const useGetAssortment = () => {
  const [assortment, setAssortment] = useState<IAssortmentOutput[]>([]);

  const getAssortment = async (): Promise<
    AxiosResponse<IAssortmentOutput[]>
  > => {
    return await $api.get('/api/dictionary/assortment');
  };

  useEffect(() => {
    (async () => {
      const req = await getAssortment();
      setAssortment(req.data);
    })();
  }, []);

  return { assortment, setAssortment };
};

export default useGetAssortment;
