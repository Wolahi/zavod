import React from 'react';

import styles from './Reports.module.scss';

import { ReportsList } from '@/widgets';

const Reports = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <ReportsList />
    </div>
  );
};

export default Reports;
