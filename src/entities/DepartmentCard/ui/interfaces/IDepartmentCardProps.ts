import { IDepartamentOutput } from '@/shared/config/interfaces/IDepartamentOutput';

export interface IDepartmentCardProps {
  department: IDepartamentOutput;
  onClick?: (e: any) => void;
}
