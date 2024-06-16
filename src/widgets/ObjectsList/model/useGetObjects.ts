import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/apiInstance.ts';
import { IObjectOutput } from '@/shared/config/interfaces/IObjectOutput';

const useGetObjects = () => {
  const [objects, setObjects] = useState<IObjectOutput[]>([]);

  const getObjects = async (): Promise<AxiosResponse<IObjectOutput[]>> => {
    return await $api.get('/api/dictionary/objects');
  };

  useEffect(() => {
    (async () => {
      const req = await getObjects();
      setObjects(req.data);
    })();
  }, []);

  return { objects, setObjects };
};

export default useGetObjects;
