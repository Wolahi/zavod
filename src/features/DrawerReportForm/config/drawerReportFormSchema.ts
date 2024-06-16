import * as yup from 'yup';

export const drawerReportFormSchema = yup.object().shape({
  department: yup.string().required('Отдел обязателен'),
  object: yup.string().required('Объект обязателен'),
  assortment: yup.string().required('Сортамент обязателен'),
  type: yup.string().required('Тип отчета обязателен'),
  count: yup
    .number()
    .typeError('Минимальное количество 1')
    .required('Количество обязательно')
    .min(1, 'Минимальное количество 1'),
});
