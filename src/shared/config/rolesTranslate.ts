import { ERole } from "@/shared/config/interfaces/ERoles.ts";

export const rolesTranslate: Record<ERole, string> = {
  [ERole.DMK]: "Руководитель ДИМК",
  [ERole.Foreman]: "Прораб по отгрузке",
  [ERole.HeadState]: "Начальник участка",
  [ERole.ADMIN]: "Админ",
};
