import { ReactElement, useMemo } from "react";
import { useNavigate } from "react-router";
import { Menu } from "antd";

import { ERoute, routes, sideBarIgnoreRouts } from "@/app/config/routes.tsx";
import { ISideBarProps } from "@/widgets/SideBar/ui/interfaces/ISideBarProps.ts";
import { TMenuItem } from "@/widgets/SideBar/ui/interfaces/TMenuItem.ts";

const SideBar = ({ collapsed }: ISideBarProps): ReactElement => {
  const navigate = useNavigate();

  const items: TMenuItem[] = useMemo(
    () =>
      routes
        .filter((route) => !sideBarIgnoreRouts.includes(route.path))
        .map((route) => ({
          key: route.path,
          icon: route.icon,
          label: route.title,
          onClick: () => navigate(route.path),
        })),
    [navigate],
  );

  return (
    <Menu
      mode={"inline"}
      theme={"light"}
      defaultSelectedKeys={[ERoute.Users]}
      items={items}
      inlineCollapsed={collapsed}
    />
  );
};

export default SideBar;
