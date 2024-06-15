import * as yup from 'yup';

export const drawerOrderFormSchema = yup.object().shape({
  name: yup.string().required('Название сортамента'),
});
