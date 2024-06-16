import { EType } from './interfaces/EType';

export const reportsTranslate: Record<EType, string> = {
  [EType.Assembly]: 'Сборка',
  [EType.Welding]: 'Сварка',
  [EType.Loading]: 'Загрузка',
};
