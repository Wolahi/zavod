import styles from './Statistic.module.scss';

import { PieChart } from '@/widgets';

const Statistic = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <PieChart />
    </div>
  );
};

export default Statistic;
