import * as yup from 'yup';

export const drawerUserFormSchema = (isCreate: boolean) => {
  return yup.object().shape({
    login: yup.string().required('Логин обязателен'),
    password: yup.lazy(() => {
      if (isCreate) return yup.string().required('Пароль обязателен');
      return yup.string();
    }),
    role: yup.string().required('Роль обязательна'),
    department: yup.string().required('Отдел обязателен'),
  });
};
