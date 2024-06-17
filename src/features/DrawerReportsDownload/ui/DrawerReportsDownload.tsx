import { Controller, useForm } from "react-hook-form";
import { Button, DatePicker, Drawer } from "antd";
import dayjs from "dayjs";
import { saveAs } from "file-saver";

import styles from "./DrawerReports.module.scss";

import useDownloadFile from "@/features/DrawerReportsDownload/module/useDownloadFile.ts";
import { IDrawerReportDownloadProps } from "@/features/DrawerReportsDownload/ui/interfaces/IDrawerReportDownloadProps.ts";
import { CustomTypography } from "@/shared/ui/CustomTypography";

const DrawerReportsDownload = ({
  open,
  onClose,
}: IDrawerReportDownloadProps) => {
  const { control, handleSubmit } = useForm<{ date: string }>();
  const { getXLSXOneDay, getXLSXFull } = useDownloadFile();

  const onSubmitOne = async (data: { date: string }) => {
    const req = await getXLSXOneDay(dayjs(data.date).format("YYYY-MM-DD"));

    if (req.data) {
      saveAs(req.data.url, "report.xlsx");
    }
  };

  const onSubmit = async (data: { date: string }) => {
    const req = await getXLSXFull(dayjs(data.date).format("YYYY-MM-DD"));

    if (req.data) {
      saveAs(req.data.url, "report.xlsx");
    }
  };
  return (
    <Drawer
      styles={{ body: { padding: "15px" } }}
      placement={"right"}
      width={520}
      onClose={onClose}
      open={open}
    >
      <form className={styles.root}>
        <CustomTypography type={"textM"}>Выгрузить отчет</CustomTypography>
        <div className={styles.item}>
          <CustomTypography type={"subtitle"}>Дата</CustomTypography>
          <Controller
            name={"date"}
            control={control}
            render={({ field }) => <DatePicker {...field} />}
          />
        </div>
        <Button type={"primary"} onClick={handleSubmit(onSubmit)}>
          Выгрузить полный отчет
        </Button>
        <Button
          type={"primary"}
          htmlType={"submit"}
          onClick={handleSubmit(onSubmitOne)}
        >
          Выгрузить за день
        </Button>
      </form>
    </Drawer>
  );
};

export default DrawerReportsDownload;
