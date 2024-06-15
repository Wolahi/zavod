import styles from './Department.module.scss';

import { DepartmentsList } from '@/widgets';

const Departments = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <DepartmentsList />
    </div>
  );
};

export default Departments;
