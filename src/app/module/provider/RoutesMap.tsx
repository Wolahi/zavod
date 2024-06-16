import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";

const RoutesMap = (): React.ReactElement => {
  const { routesPrivate } = useAuthContext();
  return (
    <Routes>
      {routesPrivate.map((route) => (
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
