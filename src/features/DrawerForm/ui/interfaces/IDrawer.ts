import type { IUserPreview } from "@/shared/config/interfaces/IUser.ts";

export interface IDrawer {
  user?: IUserPreview;
  open: boolean;
  onClose: () => void;
}
