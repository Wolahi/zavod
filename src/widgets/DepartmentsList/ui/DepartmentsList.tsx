import { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './DepartmentsList.module.scss';

import { DepartmentCard } from '@/entities';
import { DrawerDepartmentForm } from '@/features';
import { IDepartamentOutput } from '@/shared/config/interfaces/IDepartamentOutput';
import useGetDepartment from '@/shared/module/useGetDepartment';

const DepartmentsList = (): React.ReactElement => {
  const [departmentData, setDepartmentData] =
    useState<IDepartamentOutput | null>(null);
  const [open, setOpen] = useState(false);
  const { department, setDepartment } = useGetDepartment();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (dep?: IDepartamentOutput) => {
    if (dep) {
      setDepartmentData(dep);
    } else {
      setDepartmentData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {department.map((dep) => (
        <DepartmentCard
          key={dep.id}
          department={dep}
          onClick={() => handleDrawer(dep)}
        />
      ))}
      <DrawerDepartmentForm
        department={departmentData}
        open={open}
        onClose={onClose}
        setDepartment={setDepartment}
      />
      <FloatButton
        onClick={() => handleDrawer()}
        icon={<FileAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
    </div>
  );
};

export default DepartmentsList;
