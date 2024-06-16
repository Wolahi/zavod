import { useEffect } from "react";

import { useAuthContext } from "@/app/module/hooks/useAuthContext.ts";
import { $api } from "@/shared/api/apiInstance.ts";

const useInterceptors = () => {
  const { token } = useAuthContext();
  useEffect(() => {
    if (token) {
      $api.interceptors.request.use((config: any) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      }));
    }
  }, [token]);
};

export default useInterceptors;
