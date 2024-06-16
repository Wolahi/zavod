import { ERole } from '@/shared/config/interfaces/ERoles.ts';

export interface IUserPreview {
  id: string;
  login: string;
  role: ERole;
  department: string;
}
