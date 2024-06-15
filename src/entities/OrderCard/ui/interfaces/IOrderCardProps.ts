import { IOrder } from '@/shared/config/interfaces/IOrder';

export interface IOrderCardProps {
  order: IOrder;
  onClick?: (e: any) => void;
}
