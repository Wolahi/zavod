import { EType } from './interfaces/EType';
import { IReport } from './interfaces/IReport';
import { assortmentPreviewMock } from './assortmentPreviewMock';

export const reportPreviewMock: IReport[] = [
  {
    id: '1',
    count: '1',
    department: 'Прикольный такой',
    assortment: assortmentPreviewMock[42],
    object: {
      id: '1',
      name: '207-ЗАВКОМ',
    },
    type: EType.Assembly,
    isProduction: true,
    createdAt: '12.06.2024 22:56:56',
  },
  {
    id: '2',
    count: '1',
    department: 'Неприкольный такой',
    assortment: assortmentPreviewMock[43],
    object: {
      id: '1',
      name: '207-ЗАВКОМ',
    },
    isProduction: true,
    type: EType.Assembly,
    createdAt: '13.06.2024 23:55:56',
  },
  {
    id: '3',
    count: '6',
    department: 'Неприкольный такой',
    assortment: assortmentPreviewMock[44],
    object: {
      id: '1',
      name: '207-ЗАВКОМ',
    },
    isProduction: false,
    type: EType.Welding,
    createdAt: '13.06.2024 23:58:26',
  },
  {
    id: '4',
    count: '6',
    department: 'Неприкольный такой',
    assortment: assortmentPreviewMock[45],
    object: {
      id: '2',
      name: '204.5-СКЛАД',
    },
    type: EType.Loading,
    isProduction: false,
    createdAt: '13.06.2024 23:59:22',
  },
];
