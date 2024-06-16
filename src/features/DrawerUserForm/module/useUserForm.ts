import { AxiosResponse } from "axios";

import { IDrawerUserForm } from "@/features/DrawerUserForm/ui/interfaces/IDrawerUserForm.ts";
import { $api } from "@/shared/api/apiInstance.ts";
import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";

const useUserForm = () => {
  const addUser = async (
    data: IDrawerUserForm,
  ): Promise<AxiosResponse<IUserOutput>> => {
    return $api.post("/api/user/register", {
      ...data,
      department: +data.department,
    });
  };

  const updateUser = async (
    userId: number,
    data: IDrawerUserForm,
  ): Promise<AxiosResponse<IUserOutput>> => {
    const tempData = {
      id: userId,
      newName: data.name,
      newDepartment: +data.department,
    };
    return $api.post("/api/user/updateUser", tempData);
  };

  const blockUser = async (
    userId: number,
    username: string,
  ): Promise<AxiosResponse<IUserOutput>> => {
    return $api.post("/api/user/blockUser", null, {
      params: {
        userId,
        username,
      },
    });
  };

  return { addUser, updateUser, blockUser };
};

export default useUserForm;
