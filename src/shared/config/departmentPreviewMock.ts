import { IDepartment } from '@/shared/config/interfaces/IDepartment.ts';
import { userPreviewMock } from '@/shared/config/userPreviewMock.ts';

export const departmentPreviewMock: IDepartment[] = [
  {
    id: '1',
    name: 'Прикольный такой',
    foundation: true,
    users: [userPreviewMock[0], userPreviewMock[2]],
  },
  {
    id: '2',
    name: 'Неприкольный такой',
    foundation: true,
    users: [userPreviewMock[1]],
  },
  {
    id: '3',
    name: 'Хайповый такой',
    foundation: false,
    users: [userPreviewMock[3]],
  },
];
