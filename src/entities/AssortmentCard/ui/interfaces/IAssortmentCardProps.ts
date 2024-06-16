import { IAssortmentOutput } from '@/shared/config/interfaces/IAssortmentOutput';

export interface IAssortmentCardProps {
  assortment: IAssortmentOutput;
  onClick?: (e: any) => void;
}
