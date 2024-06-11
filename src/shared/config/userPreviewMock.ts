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
    login: "Wolahi",
    role: ERole.Foreman,
    department: "Неприкольный такой",
  },
  {
    id: "3",
    login: "Wolahi",
    role: ERole.HeadState,
    department: "Прикольный такой",
  },
];
