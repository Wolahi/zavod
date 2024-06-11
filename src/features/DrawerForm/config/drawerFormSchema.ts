import * as yup from "yup";

export const drawerFormSchema = yup.object().shape({
  login: yup.string().required("Логин обязателен"),
  role: yup.string().required("Роль обязательна"),
  department: yup.string().required("Отдел обязателен"),
});
