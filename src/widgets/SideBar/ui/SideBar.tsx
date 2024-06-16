import { ReactElement, useMemo } from "react";
import { useNavigate } from "react-router";
import { Menu } from "antd";

import { ERoute, sideBarIgnoreRouts } from "@/app/config/routes.tsx";
import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import { TMenuItem } from "@/widgets/SideBar/ui/interfaces/TMenuItem.ts";

const SideBar = (): ReactElement => {
  const navigate = useNavigate();

  const { routesPrivate } = useAuthContext();

  const items: TMenuItem[] = useMemo(
    () =>
      routesPrivate
        .filter((route) => !sideBarIgnoreRouts.includes(route.path))
        .map((route) => ({
          key: route.path,
          icon: route.icon,
          label: route.title,
          onClick: () => navigate(route.path),
        })),
    [routesPrivate, navigate],
  );

  return (
    <Menu
      mode={"inline"}
      theme={"light"}
      defaultSelectedKeys={[ERoute.Users]}
      items={items}
    />
  );
};

export default SideBar;
