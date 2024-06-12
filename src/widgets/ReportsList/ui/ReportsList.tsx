import { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './reportsList.module.scss';

import { ReportCard } from '@/entities';
import { DrawerNewReportForm } from '@/features';
import { reportPreviewMock } from '@/shared/config/reportPreviewMock';

const ReportsList = (): React.ReactElement => {
  const [openNew, setOpenNew] = useState(false);

  const showNewDrawer = () => {
    setOpenNew(true);
  };

  const onCloseNew = () => {
    setOpenNew(false);
  };

  const handleNewDrawer = () => {
    showNewDrawer();
  };

  return (
    <div className={styles.root}>
      {reportPreviewMock.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
      <FloatButton
        onClick={() => handleNewDrawer()}
        icon={<FileAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
      <DrawerNewReportForm open={openNew} onClose={onCloseNew} />
    </div>
  );
};

export default ReportsList;
