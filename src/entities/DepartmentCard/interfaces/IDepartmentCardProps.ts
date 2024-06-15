import { IDepartment } from '@/shared/config/interfaces/IDepartment';

export interface IDepartmentCardProps {
  department: IDepartment;
  onClick?: (e: any) => void;
}
