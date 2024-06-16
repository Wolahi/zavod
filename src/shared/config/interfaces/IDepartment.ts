import { IUserPreview } from '@/shared/config/interfaces/IUser';

export interface IDepartment {
  id: string;
  name: string;
  users: IUserPreview[];
}
