import { createContext } from "react";

import { routes } from "@/app/config/routes.tsx";
import { IAuthContext } from "@/app/module/context/AuthContext/interfaces/IAuthContext.ts";

export const AuthContext = createContext<IAuthContext>({
  user: null,
  token: null,
  routesPrivate: routes,
});
