import styles from "./Statistic.module.scss";

import { ColumnChart, PieChart, ReportTable } from "@/widgets";

const Statistic = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <ReportTable />
      <div className={styles.charts}>
        <ColumnChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Statistic;
