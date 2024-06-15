import * as yup from 'yup';

export const drawerWorkPlanFormSchema = yup.object().shape({
  count: yup
    .number()
    .typeError('Минимальное количество 0')
    .required('Количество обязательно')
    .min(0, 'Минимальное количество 0'),
});
