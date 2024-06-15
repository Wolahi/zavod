import styles from './Statistic.module.scss';

import { ColumnChart, PieChart, ReportTable } from '@/widgets';

const Statistic = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <div
        style={{
          display: 'flex',
        }}
      >
        <PieChart />
        <ColumnChart />
      </div>
      <ReportTable />
    </div>
  );
};

export default Statistic;
