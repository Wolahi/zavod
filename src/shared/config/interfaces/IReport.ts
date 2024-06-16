import { EType } from './EType';
import { IAssortment } from './IAssortment';
import { IObject } from './IObject';

export interface IReport {
  id: string;
  department: string;
  object: IObject;
  assortment: IAssortment;
  count: string;
  type: EType;
  createdAt: string;
}
