import * as yup from 'yup';

export const drawerDepartmentFormSchema = yup.object().shape({
  name: yup.string().required('Название обязательно'),
});
