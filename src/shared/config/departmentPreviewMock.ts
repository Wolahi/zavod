import { IDepartment } from '@/shared/config/interfaces/IDepartment.ts';
import { userPreviewMock } from '@/shared/config/userPreviewMock.ts';

export const departmentPreviewMock: IDepartment[] = [
  {
    id: '1',
    name: 'Прикольный такой',
    users: [userPreviewMock[0], userPreviewMock[2]],
  },
  {
    id: '2',
    name: 'Неприкольный такой',
    users: [userPreviewMock[1]],
  },
  {
    id: '3',
    name: 'Хайповый такой',
    users: [userPreviewMock[3]],
  },
];
