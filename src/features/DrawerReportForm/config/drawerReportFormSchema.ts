import * as yup from "yup";

export const drawerReportFormSchema = yup.object().shape({
  department: yup.number().required("Отдел обязателен"),
  obj: yup.number().required("Объект обязателен"),
  assortment: yup.number().required("Сортамент обязателен"),
  type: yup.string().required("Тип обязателен"),
  count: yup
    .number()
    .typeError("Минимальное количество 1")
    .required("Количество обязательно")
    .min(1, "Минимальное количество 1"),
});
