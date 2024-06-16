import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { IAssortmentOutput } from '../config/interfaces/IAssortmentOutput';

import { $api } from '@/shared/api/apiInstance.ts';

const useGetAssortmentById = (assortmentId: number) => {
  const [assortment, setAssortment] = useState<IAssortmentOutput>();

  const getAssortmentById = useCallback(async (): Promise<
    AxiosResponse<IAssortmentOutput>
  > => {
    return await $api.get(`/api/dictionary/assortment/${assortmentId}`);
  }, [assortmentId]);

  useEffect(() => {
    (async () => {
      const req = await getAssortmentById();
      setAssortment(req.data);
    })();
  }, [assortmentId, getAssortmentById]);

  return { assortment, setAssortment };
};

export default useGetAssortmentById;
