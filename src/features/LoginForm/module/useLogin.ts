import { useEffect } from "react";
import { useNavigate } from "react-router";
import { AxiosResponse } from "axios";

import { routes } from "@/app/config/routes.tsx";
import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import { ILoginForm } from "@/features/LoginForm/ui/interfaces/ILoginForm.ts";
import { $api } from "@/shared/api/apiInstance.ts";
import { ILoginOutput } from "@/shared/config/interfaces/ILoginOutput.ts";

const useLogin = () => {
  const { login, user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const firstRoute = routes.find(
        (route) => route.isPrivate && route.roles.includes(user.roles[0]),
      );

      if (firstRoute) {
        navigate(firstRoute.path);
      }
    }
  }, [navigate, user]);

  const loginReq = async (data: ILoginForm) => {
    const req: AxiosResponse<ILoginOutput> = await $api.post(
      "/api/auth/login",
      data,
    );
    const firstRoute = routes.find(
      (route) =>
        route.isPrivate && route.roles.includes(req.data.userOutput.roles[0]),
    );

    if (login && req.data && firstRoute) {
      login(req.data);
      navigate(firstRoute.path);
    }
  };

  return { loginReq };
};

export default useLogin;
