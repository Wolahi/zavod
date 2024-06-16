import { Dispatch, SetStateAction } from 'react';

import { IObjectOutput } from '@/shared/config/interfaces/IObjectOutput';

export interface IDrawerObject {
  object: IObjectOutput | null;
  open: boolean;
  setObjects: Dispatch<SetStateAction<IObjectOutput[]>>;
  onClose: () => void;
}
