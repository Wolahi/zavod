import { IReport } from './interfaces/IReport';

export const reportPreviewMock: IReport[] = [
  {
    id: '1',
    count: '1',
    department: 'Прикольный такой',
    assortment: {
      id: '1',
      name: 'К-9',
      weight: '3.002',
    },
    object: {
      id: '1',
      name: '207-ЗАВКОМ',
    },
    createdAt: '12.06.2024 22:56:56',
  },
];
