import { IAssortment } from "./IAssortment";
import { IObject } from "./IObject";

import { IDepartment } from "@/shared/config/interfaces/IDepartment.ts";
import { IStorageOutput } from "@/shared/config/interfaces/IStorageOutput.ts";
import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

export interface IReport {
  id: string;
  user: IUserOutput;
  department: IDepartment;
  obj: IObject;
  assortment: IAssortment;
  count: number;
  type: string;
  date: string;
  image: IStorageOutput;
}
