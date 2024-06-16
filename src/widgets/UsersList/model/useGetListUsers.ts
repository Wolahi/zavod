import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/apiInstance.ts';
import { IUserOutput } from '@/shared/config/interfaces/IUserOutput.ts';

const useGetListUsers = () => {
  const [users, setUsers] = useState<IUserOutput[]>([]);

  const getUsers = async (): Promise<AxiosResponse<IUserOutput[]>> => {
    return await $api.get('/api/user');
  };

  useEffect(() => {
    (async () => {
      const req = await getUsers();
      setUsers(req.data);
    })();
  }, []);

  return { users, setUsers };
};

export default useGetListUsers;
