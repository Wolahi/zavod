import styles from './WorkPlan.module.scss';

import { WorkPlanList } from '@/widgets';

const WorkPlan = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <WorkPlanList />
    </div>
  );
};

export default WorkPlan;
