import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';

export interface IDrawerWorkPlan {
  workPlan: IWorkPlan | null;
  open: boolean;
  onClose: () => void;
}
