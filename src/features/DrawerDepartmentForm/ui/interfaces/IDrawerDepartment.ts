import { Dispatch, SetStateAction } from 'react';

import { IDepartamentOutput } from '@/shared/config/interfaces/IDepartamentOutput';

export interface IDrawerDepartment {
  department: IDepartamentOutput | null;
  open: boolean;
  setDepartment: Dispatch<SetStateAction<IDepartamentOutput[]>>;
  onClose: () => void;
}
