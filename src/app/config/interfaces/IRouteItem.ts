import { ReactElement } from "react";

import { ERoute } from "@/app/config/routes.tsx";

export interface IRouteItem {
  path: ERoute;
  element: ReactElement;
  title?: string;
  icon?: ReactElement;
}
