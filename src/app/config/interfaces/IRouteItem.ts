import { ReactElement } from "react";

import { ERoute } from "@/app/config/routes.tsx";
import { ERole } from "@/shared/config/interfaces/ERoles.ts";

export interface IRouteItem {
  path: ERoute;
  element: ReactElement;
  title?: string;
  roles: ERole[];
  isPrivate: boolean;
  icon?: ReactElement;
}
