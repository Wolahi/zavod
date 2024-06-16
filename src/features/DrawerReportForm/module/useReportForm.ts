import dayjs from "dayjs";

import { IReportInput } from "@/features/DrawerReportForm/module/interfaces/IReportInput.ts";
import { IDrawerReportForm } from "@/features/DrawerReportForm/ui/interfaces/IDrawerReportForm.ts";
import { $api } from "@/shared/api/apiInstance.ts";
import { IStorageImageInput } from "@/shared/config/interfaces/IStorageImageInput.ts";

const useReportForm = () => {
  const addReport = (data: IDrawerReportForm, image: IStorageImageInput) => {
    const tempData: IReportInput = {
      ...data,
      date: dayjs().format("YYYY-MM-DD"),
      keyImage: image.parentId || "",
      assortment: Number(data.assortment),
      obj: Number(data.obj),
      department: Number(data.department),
    };

    return $api.post("/api/reporting", tempData);
  };

  const updateReport = (data: IDrawerReportForm, id: string) => {
    const tempData: IReportInput = {
      ...data,
      assortment: Number(data.assortment),
      obj: Number(data.obj),
      department: Number(data.department),
    };
    return $api.put(`/api/reporting/${id}`, tempData);
  };

  const deleteReport = async (id: string) => {
    await $api.delete(`/api/reporting/delete/${id}`);
  };

  return { addReport, updateReport, deleteReport };
};

export default useReportForm;
