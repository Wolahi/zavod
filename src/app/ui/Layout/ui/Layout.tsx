import { useState } from "react";
import { useLocation } from "react-router";
import { Layout as LayoutAntd } from "antd";
import Slider from "antd/es/layout/Sider";
import { Content } from "antd/lib/layout/layout";

import styles from "./Layout.module.scss";

import { ERoute, sideBarIgnoreRouts } from "@/app/config/routes.tsx";
import RoutesMap from "@/app/module/provider/RoutesMap.tsx";
import SideBar from "@/widgets/SideBar/ui/SideBar.tsx";
const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const location = useLocation();
  return (
    <LayoutAntd className={styles.root}>
      {!sideBarIgnoreRouts.includes(location.pathname as ERoute) && (
        <Slider
          className={styles.sideBar}
          collapsible
          collapsedWidth="0"
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          onBreakpoint={() => setCollapsed(true)}
          theme={"light"}
        >
          <SideBar />
        </Slider>
      )}
      <Content className={styles.content}>
        <RoutesMap />
      </Content>
    </LayoutAntd>
  );
};

export default Layout;
