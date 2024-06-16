import { ReactElement, useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import useGetWorkPlanList from '../module/useGetWorkPlanLists';

import styles from './WorkPlan.module.scss';

import { WorkPlanCard } from '@/entities';
import { DrawerWorkPlan } from '@/features';
import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';

const WorkPlanList = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [workPlanData, setWorkPlanData] = useState<IWorkPlan | null>(null);
  const { workPlanList, setWorkPlanList } = useGetWorkPlanList();

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
      {workPlanList.map((workPlan) => (
        <WorkPlanCard
          key={workPlan.objId.id}
          workPlan={workPlan}
          onClick={() => handleDrawer(workPlan)}
        />
      ))}
      <FloatButton
        onClick={() => handleDrawer()}
        icon={<FileAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
      <DrawerWorkPlan
        setWorkPlanList={setWorkPlanList}
        open={open}
        onClose={onClose}
        workPlan={workPlanData}
      />
    </div>
  );
};

export default WorkPlanList;
