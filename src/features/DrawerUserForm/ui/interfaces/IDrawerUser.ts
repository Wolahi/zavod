import type { IUserPreview } from '@/shared/config/interfaces/IUser.ts';

export interface IDrawerUser {
  user: IUserPreview | null;
  open: boolean;
  onClose: () => void;
}
