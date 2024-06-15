import { IDepartment } from '@/shared/config/interfaces/IDepartment.ts';
import { userPreviewMock } from '@/shared/config/userPreviewMock.ts';

export const departmentPreviewMock: IDepartment[] = [
  {
    name: 'Прикольный такой',
    users: [userPreviewMock[0], userPreviewMock[2]],
  },
  {
    name: 'Неприкольный такой',
    users: [userPreviewMock[1]],
  },
];
