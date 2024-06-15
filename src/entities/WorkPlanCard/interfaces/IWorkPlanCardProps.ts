import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';

export interface IWorkPlanCardProps {
  workPlan: IWorkPlan | null;
  onClick?: (e: any) => void;
}
