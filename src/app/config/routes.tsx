import {
  AreaChartOutlined,
  AuditOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { IRouteItem } from "./interfaces/IRouteItem.ts";

import { Login, NotFound, Reports, Statistic, Users } from "@/pages";

export enum ERoute {
  Login = "/",
  Users = "/users",
  Statistics = "/statistics",
  Reports = "/reports",
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
    path: ERoute.Reports,
    element: <Reports />,
    title: "Отчеты",
    icon: <AuditOutlined />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];
