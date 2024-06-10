import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { routes } from "@/app/config/routes.tsx";

const RoutesMap = (): React.ReactElement => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Suspense fallback={"От такот"}>{route.element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default RoutesMap;
