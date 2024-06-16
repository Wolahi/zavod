import { AxiosResponse } from 'axios';

import { IDrawerObjectForm } from '@/features/DrawerOrderForm/ui/interfaces/IDrawerObjectForm';
import { $api } from '@/shared/api/apiInstance.ts';
import { IObjectOutput } from '@/shared/config/interfaces/IObjectOutput';

const useObjectForm = () => {
  const addObject = async (
    data: IDrawerObjectForm
  ): Promise<AxiosResponse<IObjectOutput>> => {
    return $api.post('/api/dictionary/objects', data);
  };

  const updateObject = async (
    objectId: number,
    data: IDrawerObjectForm
  ): Promise<AxiosResponse<IObjectOutput>> => {
    const tempData = {
      id: objectId,
      name: data.name,
    };
    return $api.put('/api/dictionary/objects', tempData);
  };

  const deleteObject = async (
    objectId: number
  ): Promise<AxiosResponse<IObjectOutput>> => {
    return $api.delete(`/api/dictionary/objects/${objectId}`);
  };

  return { addObject, updateObject, deleteObject };
};

export default useObjectForm;
