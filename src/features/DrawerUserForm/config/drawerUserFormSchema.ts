import * as yup from "yup";

export const drawerUserFormSchema = (isCreate: boolean) => {
  return yup.object().shape({
    username: yup.string().required("Логин обязателен"),
    name: yup.string().required("Имя обязательно"),
    password: yup.lazy(() => {
      if (isCreate) return yup.string().required("Пароль обязателен");
      return yup.string();
    }),
    role: yup.string().required("Роль обязательна"),
    department: yup.number().required("Отдел обязателен"),
  });
};
