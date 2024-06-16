import { AxiosResponse } from 'axios';

import { IDrawerAssortmentForm } from '@/features/DrawerAssortmentForm/ui/interfaces/IDrawerAssortmentForm';
import { $api } from '@/shared/api/apiInstance.ts';
import { IAssortmentOutput } from '@/shared/config/interfaces/IAssortmentOutput';

const useAssortmentForm = () => {
  const addAssortment = async (
    data: IDrawerAssortmentForm
  ): Promise<AxiosResponse<IAssortmentOutput>> => {
    return $api.post('/api/dictionary/assortment', data);
  };

  const updateAssortment = async (
    assortmentId: number,
    data: IDrawerAssortmentForm
  ): Promise<AxiosResponse<IAssortmentOutput>> => {
    const tempData = {
      id: assortmentId,
      name: data.name,
      count: data.count,
    };
    return $api.put('/api/dictionary/assortment', tempData);
  };

  const deleteAssortment = async (
    assortmentId: number
  ): Promise<AxiosResponse<IAssortmentOutput>> => {
    return $api.delete(`/api/dictionary/assortment/${assortmentId}`);
  };

  return { addAssortment, updateAssortment, deleteAssortment };
};

export default useAssortmentForm;
