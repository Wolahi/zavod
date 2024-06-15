import * as yup from 'yup';

export const drawerAssortmentFormSchema = yup.object().shape({
  name: yup.string().required('Название обязательно'),
  weight: yup
    .number()
    .typeError('Минимальный вес 0 тн.')
    .required('Количество обязательно')
    .min(0, 'Минимальный вес 0 тн.'),
});
