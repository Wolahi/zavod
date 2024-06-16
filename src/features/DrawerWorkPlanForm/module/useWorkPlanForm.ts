import { AxiosResponse } from 'axios';

import { IDrawerWorkPlanForm } from '../interfaces/IDrawerWorkPlanForm';

import { $api } from '@/shared/api/apiInstance.ts';
import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';

const useWorkPlanForm = () => {
  const addWorkPlan = async (
    data: IDrawerWorkPlanForm
  ): Promise<AxiosResponse<IWorkPlan>> => {
    return $api.post('/api/dictionary/workplane', data);
  };

  return { addWorkPlan };
};

export default useWorkPlanForm;
