import { AxiosResponse } from 'axios';

import { IDrawerDepartmentForm } from '@/features/DrawerDepartmentForm/ui/interfaces/IDrawerDepartmentForm.ts';
import { $api } from '@/shared/api/apiInstance.ts';
import { IDepartamentOutput } from '@/shared/config/interfaces/IDepartamentOutput';

const useDepartmentForm = () => {
  const addDepartment = async (
    data: IDrawerDepartmentForm
  ): Promise<AxiosResponse<IDepartamentOutput>> => {
    return $api.post('/api/department', data);
  };

  const updateDepartment = async (
    departmentId: number,
    data: IDrawerDepartmentForm
  ): Promise<AxiosResponse<IDepartamentOutput>> => {
    const tempData = {
      id: departmentId,
      name: data.name,
      foundation: data.foundation,
    };
    return $api.put('/api/department', tempData);
  };

  const deleteDepartment = async (
    departmentId: number
  ): Promise<AxiosResponse<IDepartamentOutput>> => {
    return $api.delete(`/api/department/${departmentId}`);
  };

  return { addDepartment, updateDepartment, deleteDepartment };
};

export default useDepartmentForm;
