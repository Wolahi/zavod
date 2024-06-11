import { AreaChartOutlined, UserOutlined } from "@ant-design/icons";

import { IRouteItem } from "./interfaces/IRouteItem.ts";

import { Login, NotFound, Statistic, Users } from "@/pages";

export enum ERoute {
  Login = "/",
  Users = "/users",
  Statistics = "/statistics",
  NotFound = "*",
}

export const sideBarIgnoreRouts = [ERoute.Login, ERoute.NotFound];

export const routes: IRouteItem[] = [
  {
    path: ERoute.Login,
    element: <Login />,
  },
  {
    path: ERoute.Users,
    element: <Users />,
    title: "Работники",
    icon: <UserOutlined />,
  },
  {
    path: ERoute.Statistics,
    element: <Statistic />,
    title: "Статистика",
    icon: <AreaChartOutlined />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];
