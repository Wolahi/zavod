import { useState } from "react";
import { Button, Layout as LayoutAntd } from "antd";
import Slider from "antd/es/layout/Sider";
import { Content } from "antd/lib/layout/layout";

import styles from "./Layout.module.scss";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import useInterceptors from "@/app/module/hooks/useInterceptors.ts";
import RoutesMap from "@/app/module/provider/RoutesMap.tsx";
import { rolesTranslate } from "@/shared/config/rolesTranslate.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";
import SideBar from "@/widgets/SideBar/ui/SideBar.tsx";
const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const { user, logout } = useAuthContext();

  useInterceptors();

  return (
    <LayoutAntd className={styles.root}>
      {user && (
        <Slider
          className={styles.sideBar}
          collapsible
          collapsedWidth="0"
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          onBreakpoint={() => setCollapsed(true)}
          theme={"light"}
        >
          <div className={styles.itemsWrapp}>
            <SideBar />
            <div className={styles.userBtn}>
              <CustomTypography type={"subtitle"}>
                Имя: {user.name}
              </CustomTypography>
              <CustomTypography type={"subtitle"}>
                Роль: {rolesTranslate[user.roles[0]]}
              </CustomTypography>
              <Button type={"default"} onClick={logout}>
                <CustomTypography type={"subtitle"} component={"div"}>
                  Выйти
                </CustomTypography>
              </Button>
            </div>
          </div>
        </Slider>
      )}
      <Content className={styles.content}>
        <RoutesMap />
      </Content>
    </LayoutAntd>
  );
};

export default Layout;
