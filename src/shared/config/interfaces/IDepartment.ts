import { IUserPreview } from "@/shared/config/interfaces/IUser";

export interface IDepartment {
  id: number;
  name: string;
  users: IUserPreview[];
}
