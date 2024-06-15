import { IAssortment } from '@/shared/config/interfaces/IAssortment';

export interface IDrawerAssortment {
  assortment: IAssortment | null;
  open: boolean;
  onClose: () => void;
}
