import { useEffect } from "react";

import { useCreateColumnChart } from "@/shared/lib/hooks/useCreateColumnChart/useCreateColumnChart";

const ColumnChart = () => {
  const [createRoot] = useCreateColumnChart();
  useEffect(() => {
    let root = createRoot("columnchartdiv");
    return () => {
      root.dispose();
    };
  });
  return (
    <div
      id="columnchartdiv"
      style={{
        width: "500px",
        height: "350px",
      }}
    ></div>
  );
};

export default ColumnChart;
