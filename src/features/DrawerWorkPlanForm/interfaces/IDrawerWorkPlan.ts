import { Dispatch, SetStateAction } from 'react';

import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';

export interface IDrawerWorkPlan {
  workPlan: IWorkPlan | null;
  open: boolean;
  onClose: () => void;
  setWorkPlanList: Dispatch<SetStateAction<IWorkPlan[]>>;
}
