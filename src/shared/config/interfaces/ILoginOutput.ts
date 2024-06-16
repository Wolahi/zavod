import { ITokenOutput } from "@/shared/config/interfaces/ITokenOutput.ts";
import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

export interface ILoginOutput {
  userOutput: IUserOutput;
  tokenOutput: ITokenOutput;
}
