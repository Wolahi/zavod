import type { IUserPreview } from '@/shared/config/interfaces/IUser.ts';

export interface IDrawerEditUser {
  user?: IUserPreview;
  open: boolean;
  label: string;
  onClose: () => void;
}
