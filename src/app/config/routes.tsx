import {
  AreaChartOutlined,
  AuditOutlined,
  BookOutlined,
  FileTextOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { IRouteItem } from './interfaces/IRouteItem.ts';

import {
  Departments,
  Guide,
  Login,
  NotFound,
  Reports,
  Statistic,
  Users,
  WorkPlan,
} from '@/pages';

export enum ERoute {
  Login = '/',
  Users = '/users',
  Statistics = '/statistics',
  Reports = '/reports',
  Departments = '/departments',
  WorkPlan = '/work-plan',
  Guide = '/guide',
  NotFound = '*',
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
    title: 'Работники',
    icon: <UserOutlined />,
  },
  {
    path: ERoute.Departments,
    element: <Departments />,
    title: 'Отделы',
    icon: <SolutionOutlined />,
  },
  {
    path: ERoute.Statistics,
    element: <Statistic />,
    title: 'Статистика',
    icon: <AreaChartOutlined />,
  },
  {
    path: ERoute.Reports,
    element: <Reports />,
    title: 'Отчеты',
    icon: <AuditOutlined />,
  },
  {
    path: ERoute.WorkPlan,
    element: <WorkPlan />,
    title: 'Рабочий план',
    icon: <FileTextOutlined />,
  },
  {
    path: ERoute.Guide,
    element: <Guide />,
    title: 'Справочник',
    icon: <BookOutlined />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];
