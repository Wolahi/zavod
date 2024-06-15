import { ReactElement, useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './WorkPlan.module.scss';

import { WorkPlanCard } from '@/entities';
import { DrawerWorkPlan } from '@/features';
import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';
import { workPlanPreviewMock } from '@/shared/config/workPlanPreviewMock';

const WorkPlanList = (): ReactElement => {
  const [workPlanData, setWorkPlanData] = useState<IWorkPlan | null>(null);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (workPlanData?: IWorkPlan) => {
    if (workPlanData) {
      setWorkPlanData(workPlanData);
    } else {
      setWorkPlanData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {workPlanPreviewMock.map((workPlan) => (
        <WorkPlanCard
          key={workPlan.assortment.id}
          workPlan={workPlan}
          onClick={() => handleDrawer(workPlan)}
        />
      ))}
      <DrawerWorkPlan open={open} onClose={onClose} workPlan={workPlanData} />
    </div>
  );
};

export default WorkPlanList;
