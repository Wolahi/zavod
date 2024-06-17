import styles from "./Statistic.module.scss";

import { ReportTable } from "@/widgets";

const Statistic = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <ReportTable />
    </div>
  );
};

export default Statistic;
