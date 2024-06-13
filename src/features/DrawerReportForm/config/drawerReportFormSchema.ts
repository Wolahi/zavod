import * as yup from 'yup';

export const drawerReportFormSchema = yup.object().shape({
  department: yup.string().required('Отдел обязателен'),
  object: yup.string().required('Объект обязателен'),
  assortment: yup.string().required('Сортамент обязателен'),
  count: yup
    .number()
    .required('Количество обязательно')
    .min(0, 'Минимальное количество 0'),
});
