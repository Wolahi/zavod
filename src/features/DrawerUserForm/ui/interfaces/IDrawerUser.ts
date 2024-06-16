import { Dispatch, SetStateAction } from "react";

import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

export interface IDrawerUser {
  user: IUserOutput | null;
  open: boolean;
  setUsers: Dispatch<SetStateAction<IUserOutput[]>>;
  onClose: () => void;
}
