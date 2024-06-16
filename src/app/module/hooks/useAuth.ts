import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import { routes } from "@/app/config/routes.tsx";
import { ILoginOutput } from "@/shared/config/interfaces/ILoginOutput.ts";
import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

const useAuth = () => {
  const [user, setUser] = useState<IUserOutput | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const routesPrivate = useMemo(
    () =>
      routes.filter(
        (route) =>
          !route.isPrivate ||
          (user && route.isPrivate && route.roles.includes(user?.roles[0])),
      ),
    [user],
  );

  useEffect(() => {
    const userLs = localStorage.getItem("user");
    const tokenLs = localStorage.getItem("authToken");

    if (userLs) {
      setUser(JSON.parse(userLs));
    }

    if (tokenLs) {
      setToken(tokenLs);
    }
  }, []);

  const login = (data: ILoginOutput) => {
    setToken(data.tokenOutput.access);
    setUser(data.userOutput);

    localStorage.setItem("authToken", data.tokenOutput.access);
    localStorage.setItem("user", JSON.stringify(data.userOutput));
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return { user, token, login, logout, routesPrivate };
};

export default useAuth;
