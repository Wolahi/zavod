import { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './AssortmentsList.module.scss';

import { AssortmentCard } from '@/entities';
import { DrawerAssortmentForm } from '@/features';
import { assortmentPreviewMock } from '@/shared/config/assortmentPreviewMock';
import { IAssortment } from '@/shared/config/interfaces/IAssortment';

const AssortmentsList = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [assortmentData, setAssortmentData] = useState<IAssortment | null>(
    null
  );

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (assortment?: IAssortment) => {
    if (assortment) {
      setAssortmentData(assortment);
      console.log(assortment);
    } else {
      setAssortmentData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {assortmentPreviewMock.map((assortment) => (
        <AssortmentCard
          key={assortment.id}
          assortment={assortment}
          onClick={() => handleDrawer(assortment)}
        />
      ))}

      <FloatButton
        shape='square'
        tooltip={<div>Сортамент</div>}
        icon={<FileAddOutlined />}
        onClick={() => handleDrawer()}
        style={{ bottom: '90px', boxShadow: 'none' }}
      />
      <DrawerAssortmentForm
        open={open}
        onClose={onClose}
        assortment={assortmentData}
      />
    </div>
  );
};

export default AssortmentsList;
