import React, { PropsWithChildren } from "react";

import { AuthContext } from "@/app/module/context/AuthContext/AuthContext.ts";
import useAuth from "@/app/module/hooks/useAuth.ts";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { logout, login, user, token, routesPrivate } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        logout,
        login,
        routesPrivate,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
