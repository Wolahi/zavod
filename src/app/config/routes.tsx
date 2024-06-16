import {
  AreaChartOutlined,
  AuditOutlined,
  BookOutlined,
  FileTextOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { IRouteItem } from "./interfaces/IRouteItem.ts";

import {
  Departments,
  Guide,
  Login,
  NotFound,
  Reports,
  Statistic,
  Users,
  WorkPlan,
} from "@/pages";
import { ERole } from "@/shared/config/interfaces/ERoles.ts";

export enum ERoute {
  Login = "/",
  Users = "/users",
  Statistics = "/statistics",
  Reports = "/reports",
  Departments = "/departments",
  WorkPlan = "/work-plan",
  Guide = "/guide",
  NotFound = "*",
}

export const sideBarIgnoreRouts = [ERoute.Login, ERoute.NotFound];

export const routes: IRouteItem[] = [
  {
    path: ERoute.Login,
    element: <Login />,
    roles: [ERole.Foreman, ERole.DMK, ERole.ADMIN, ERole.HeadState],
    isPrivate: false,
  },
  {
    path: ERoute.Users,
    isPrivate: true,
    element: <Users />,
    title: "Работники",
    icon: <UserOutlined />,
    roles: [ERole.DMK, ERole.ADMIN],
  },
  {
    path: ERoute.Departments,
    isPrivate: true,
    element: <Departments />,
    title: "Отделы",
    icon: <SolutionOutlined />,
    roles: [ERole.DMK, ERole.ADMIN],
  },
  {
    path: ERoute.Statistics,
    isPrivate: true,
    element: <Statistic />,
    title: "Статистика",
    icon: <AreaChartOutlined />,
    roles: [ERole.DMK, ERole.ADMIN, ERole.HeadState],
  },
  {
    path: ERoute.Reports,
    element: <Reports />,
    isPrivate: true,
    title: "Отчеты",
    icon: <AuditOutlined />,
    roles: [ERole.ADMIN, ERole.HeadState],
  },
  {
    path: ERoute.WorkPlan,
    isPrivate: true,
    element: <WorkPlan />,
    title: "Рабочий план",
    icon: <FileTextOutlined />,
    roles: [ERole.DMK, ERole.ADMIN],
  },
  {
    path: ERoute.Guide,
    element: <Guide />,
    isPrivate: true,
    title: "Справочник",
    icon: <BookOutlined />,
    roles: [ERole.DMK, ERole.ADMIN, ERole.Foreman],
  },
  {
    path: ERoute.NotFound,
    isPrivate: false,
    element: <NotFound />,
    roles: [ERole.Foreman, ERole.DMK, ERole.ADMIN, ERole.HeadState],
  },
];
