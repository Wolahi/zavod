import { IAssortment } from '@/shared/config/interfaces/IAssortment';

export interface IAssortmentCardProps {
  assortment: IAssortment;
  onClick?: (e: any) => void;
}
