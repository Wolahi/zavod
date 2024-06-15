import { IDepartment } from '@/shared/config/interfaces/IDepartment';

export interface IDrawerDepartment {
  department: IDepartment | null;
  open: boolean;
  onClose: () => void;
}
