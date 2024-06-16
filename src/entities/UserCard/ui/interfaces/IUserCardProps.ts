import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

export interface IUserCardProps {
  user: IUserOutput;
  onClick?: (e: any) => void;
}
