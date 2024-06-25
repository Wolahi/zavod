import { useEffect } from "react";
import { DatePicker, Typography } from "antd";

import styles from "./PieChart.module.scss";

import { useCreatePieChart } from "@/shared/lib/hooks/useCreatePieChart/useCreatePieChart";
import useGetPieChart from "@/widgets/PieChart/module/useGetPieChart.ts";

const { RangePicker } = DatePicker;

const PieChart = () => {
  const [createRoot] = useCreatePieChart();
  const { handleDatePicker, pieData } = useGetPieChart();
  useEffect(() => {
    if (pieData) {
      let root = createRoot("Series", "country", "sales", "chartdiv", pieData);
      return () => {
        root.dispose();
      };
    }
  });
  return (
    <div className={styles.root}>
      <RangePicker
        height={64}
        format={"DD-MM-YYYY"}
        onChange={(value) => {
          if (value && value.length > 0) {
            handleDatePicker([value[0] as any, value[1] as any]);
          }
        }}
      />
      {pieData ? (
        <div
          id="chartdiv"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      ) : (
        <Typography>Введите даты, для просмотра графика</Typography>
      )}
    </div>
  );
};

export default PieChart;
