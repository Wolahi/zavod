import { Dispatch, SetStateAction } from 'react';

import { IAssortmentOutput } from '@/shared/config/interfaces/IAssortmentOutput';

export interface IDrawerAssortment {
  assortment: IAssortmentOutput | null;
  open: boolean;
  setAssortment: Dispatch<SetStateAction<IAssortmentOutput[]>>;
  onClose: () => void;
}
