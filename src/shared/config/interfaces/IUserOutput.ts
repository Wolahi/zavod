import { ERole } from "@/shared/config/interfaces/ERoles.ts";
import { IDepartamentOutput } from "@/shared/config/interfaces/IDepartamentOutput.ts";

export interface IUserOutput {
  id: number;
  name: string;
  username: string;
  roles: ERole[];
  department: IDepartamentOutput;
  isBlocked: boolean;
}
