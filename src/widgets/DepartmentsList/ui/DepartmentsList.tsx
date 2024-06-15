import { useState } from 'react';

import styles from './DepartmentsList.module.scss';

import { DepartmentCard } from '@/entities';
import { DrawerDepartmentForm } from '@/features';
import { departmentPreviewMock } from '@/shared/config/departmentPreviewMock';
import { IDepartment } from '@/shared/config/interfaces/IDepartment';

const DepartmentsList = (): React.ReactElement => {
  const [departmentData, setDepartmentData] = useState<IDepartment | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (department?: IDepartment) => {
    if (department) {
      setDepartmentData(department);
    } else {
      setDepartmentData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {departmentPreviewMock.map((department) => (
        <DepartmentCard
          key={department.name}
          department={department}
          onClick={() => handleDrawer(department)}
        />
      ))}
      <DrawerDepartmentForm
        department={departmentData}
        open={open}
        onClose={onClose}
      />
    </div>
  );
};

export default DepartmentsList;
