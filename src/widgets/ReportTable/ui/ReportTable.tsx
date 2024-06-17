import { useState } from "react";
import { Button, DatePicker, Table } from "antd";
import dayjs from "dayjs";
import { saveAs } from "file-saver";

import styles from "./ReportTable.module.scss";

import { Select } from "@/shared";
import useGetDepartment from "@/shared/module/useGetDepartment.ts";
import { columns } from "@/widgets/ReportTable/config/columns.tsx";
import useGetStats from "@/widgets/ReportTable/module/useGetStats.ts";

const { RangePicker } = DatePicker;

const ReportTable = () => {
  const { data, getStats, getXlsx, getXlsxDep } = useGetStats();
  const [timeState, setTimeState] = useState<string[]>([]);
  const [selectDepartment, setSelectDepartment] = useState<number | null>(null);
  const { department } = useGetDepartment();

  const handleDatePicker = async (data: string[]) => {
    const [dateAt, dateTo] = data;
    setTimeState([
      dayjs(dateAt).format("YYYY-MM-DD"),
      dayjs(dateTo).format("YYYY-MM-DD"),
    ]);
    if (dateAt && dateTo) {
      await getStats(
        dayjs(dateAt).format("YYYY-MM-DD"),
        dayjs(dateTo).format("YYYY-MM-DD"),
      );
    }
  };

  const saveFile = async () => {
    if (timeState.length > 0) {
      const [dateAt, dateTo] = timeState;
      const res = await getXlsx(dateAt, dateTo);
      saveAs(res.data.url);
    }
  };

  const saveFileDepartment = async () => {
    if (timeState.length > 0 && selectDepartment) {
      const [dateAt, dateTo] = timeState;
      const res = await getXlsxDep(dateAt, dateTo, selectDepartment);
      saveAs(res.data.url);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.pickers}>
        <RangePicker
          format={"DD-MM-YYYY"}
          onChange={(value) => {
            if (value && value.length > 0) {
              handleDatePicker([value[0] as any, value[1] as any]);
            }
          }}
        />
      </div>
      <div className={styles.tables}>
        <Table
          columns={columns}
          dataSource={(data as any) || []}
          pagination={false}
        />
        {data && (
          <div className={styles.items}>
            <Button onClick={saveFile}>Выгрузить по всем отделам</Button>
            <div className={styles.items}>
              <Select
                options={department.map((dep) => ({
                  value: dep.id,
                  label: dep.name,
                }))}
                onChange={(value) => setSelectDepartment(value)}
              />
              <Button disabled={!selectDepartment} onClick={saveFileDepartment}>
                Выгрузить по отделу
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportTable;
