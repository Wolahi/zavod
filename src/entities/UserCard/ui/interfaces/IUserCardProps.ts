import { IUserPreview } from "@/shared/config/interfaces/IUser.ts";

export interface IUserCardProps {
  user: IUserPreview;
  onClick?: (e: any) => void;
}