import { ERole } from "@/shared/config/interfaces/ERoles.ts";
import type { IOption } from "@/shared/config/interfaces/IOption.ts";
import { rolesTranslate } from "@/shared/config/rolesTranslate.ts";

export const rolesOptions: IOption[] = Object.values(ERole).map((key) => ({
  value: key,
  label: rolesTranslate[key as ERole],
}));
