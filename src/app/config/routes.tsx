import { IRouteItem } from "./interfaces/IRouteItem.ts";

import { Login, NotFound, Statistic, Users } from "@/pages";

export enum ERoute {
  Login = "/",
  Users = "/users",
  Statistics = "/statistics",
  NotFound = "*",
}

export const routes: IRouteItem[] = [
  {
    path: ERoute.Login,
    element: <Login />,
  },
  {
    path: ERoute.Users,
    element: <Users />,
  },
  {
    path: ERoute.Statistics,
    element: <Statistic />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];
