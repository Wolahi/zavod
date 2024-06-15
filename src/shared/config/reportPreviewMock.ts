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
  {
    id: '2',
    count: '1',
    department: 'Неприкольный такой',
    assortment: {
      id: '2',
      name: 'К-14',
      weight: '1.005',
    },
    object: {
      id: '1',
      name: '207-ЗАВКОМ',
    },
    createdAt: '13.06.2024 23:55:56',
  },
  {
    id: '3',
    count: '6',
    department: 'Неприкольный такой',
    assortment: {
      id: '3',
      name: 'С-31',
      weight: '0.180',
    },
    object: {
      id: '1',
      name: '207-ЗАВКОМ',
    },
    createdAt: '13.06.2024 23:58:26',
  },
  {
    id: '4',
    count: '6',
    department: 'Неприкольный такой',
    assortment: {
      id: '4',
      name: 'П-5',
      weight: '0.270',
    },
    object: {
      id: '2',
      name: '204.5-СКЛАД',
    },
    createdAt: '13.06.2024 23:59:22',
  },
];
