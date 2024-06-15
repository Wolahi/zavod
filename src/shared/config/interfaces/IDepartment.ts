import { IUserPreview } from '@/shared/config/interfaces/IUser';

export interface IDepartment {
  name: string;
  users: IUserPreview[];
}
