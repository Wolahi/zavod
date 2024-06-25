import { useEffect } from "react";
import { Spin } from "antd";

import { useCreateColumnChart } from "@/shared/lib/hooks/useCreateColumnChart/useCreateColumnChart";
import useGetColumn from "@/widgets/ColumnChart/module/useGetColumn.ts";

const ColumnChart = () => {
  const { columnData } = useGetColumn();
  console.log(columnData);
  const [createRoot] = useCreateColumnChart(columnData);
  useEffect(() => {
    let root = createRoot("columnchartdiv");
    return () => {
      root.dispose();
    };
  });
  return (
    <div>
      {columnData ? (
        <div
          id="columnchartdiv"
          style={{
            width: "500px",
            height: "750px",
          }}
        ></div>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ColumnChart;
