import { ERole } from "@/shared/config/interfaces/ERoles.ts";
import { IUserPreview } from "@/shared/config/interfaces/IUser.ts";

export const userPreviewMock: IUserPreview[] = [
  {
    id: "1",
    login: "Wolahi",
    role: ERole.DMK,
    department: "Прикольный такой",
  },
  {
    id: "2",
    login: "Maxim",
    role: ERole.Foreman,
    department: "Неприкольный такой",
  },
  {
    id: "3",
    login: "Makrota",
    role: ERole.HeadState,
    department: "Прикольный такой",
  },
  {
    id: "4",
    login: "Anion",
    role: ERole.HeadState,
    department: "Хайповый такой",
  },
  {
    id: "5",
    login: "Ванек",
    role: ERole.HeadState,
    department: "Хайповый такой",
  },
];
