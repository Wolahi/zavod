import { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './AssortmentsList.module.scss';

import { AssortmentCard } from '@/entities';
import { DrawerAssortmentForm } from '@/features';
import { assortmentPreviewMock } from '@/shared/config/assortmentPreviewMock';
import { IAssortmentOutput } from '@/shared/config/interfaces/IAssortmentOutput';
import useGetAssortment from '@/shared/module/useGetAssortment';

const AssortmentsList = (): React.ReactElement => {
  const [assortmentData, setAssortmentData] =
    useState<IAssortmentOutput | null>(null);
  const [open, setOpen] = useState(false);
  const { assortment, setAssortment } = useGetAssortment();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (assortment?: IAssortmentOutput) => {
    if (assortment) {
      setAssortmentData(assortment);
    } else {
      setAssortmentData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {assortment.map((assort) => (
        <AssortmentCard
          key={assort.id}
          assortment={assort}
          onClick={() => handleDrawer(assort)}
        />
      ))}

      <DrawerAssortmentForm
        assortment={assortmentData}
        open={open}
        onClose={onClose}
        setAssortment={setAssortment}
      />
      <FloatButton
        shape='square'
        tooltip={<div>Сортамент</div>}
        icon={<FileAddOutlined />}
        onClick={() => handleDrawer()}
        style={{ bottom: '90px', boxShadow: 'none' }}
      />
    </div>
  );
};

export default AssortmentsList;
