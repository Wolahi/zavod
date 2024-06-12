import * as yup from 'yup';

export const drawerNewUserFormSchema = yup.object().shape({
  login: yup.string().required('Логин обязателен'),
  password: yup
    .string()
    .min(8, 'Минимальное количество символов 8')
    .max(32, 'Допустимое количество символов 32')
    .required('Пароль обязателен'),
  role: yup.string().required('Роль обязательна'),
  department: yup.string().required('Отдел обязателен'),
});
