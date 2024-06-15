import { IOrder } from '@/shared/config/interfaces/IOrder';

export interface IDrawerOrder {
  order: IOrder | null;
  open: boolean;
  onClose: () => void;
}
