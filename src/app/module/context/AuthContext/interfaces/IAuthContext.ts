import { IRouteItem } from "@/app/config/interfaces/IRouteItem.ts";
import { ILoginOutput } from "@/shared/config/interfaces/ILoginOutput.ts";
import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

export interface IAuthContext {
  user: IUserOutput | null;
  token: string | null;
  routesPrivate: IRouteItem[];
  login?: (data: ILoginOutput) => void;
  logout?: () => void;
}
