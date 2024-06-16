import { EType } from './interfaces/EType';

import type { IOption } from '@/shared/config/interfaces/IOption.ts';
import { reportsTranslate } from '@/shared/config/reportsTranslate.ts';

export const reportOptions: IOption[] = Object.values(EType).map((key) => ({
  value: key,
  label: reportsTranslate[key as EType],
}));
