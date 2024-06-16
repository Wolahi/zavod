import { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import useGetObjects from '../model/useGetObjects';

import styles from './OrdersList.module.scss';

import { ObjectCard, OrderCard } from '@/entities';
import { DrawerOrderForm } from '@/features';
import { IObjectOutput } from '@/shared/config/interfaces/IObjectOutput';
import { orderPreviewMock } from '@/shared/config/orderPreviewMock';

const OrdersList = (): React.ReactElement => {
  const [objectData, setObjectData] = useState<IObjectOutput | null>(null);
  const [open, setOpen] = useState(false);
  const { objects, setObjects } = useGetObjects();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (object?: IObjectOutput) => {
    if (object) {
      setObjectData(object);
      console.log(object);
    } else {
      setObjectData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {objects.map((object) => (
        <ObjectCard
          key={object.id}
          object={object}
          onClick={() => handleDrawer(object)}
        />
      ))}
      <DrawerOrderForm
        object={objectData}
        open={open}
        onClose={onClose}
        setObjects={setObjects}
      />
      <FloatButton
        shape='square'
        tooltip={<div>Заказ</div>}
        icon={<FileAddOutlined />}
        onClick={() => handleDrawer()}
        style={{ bottom: '50px', boxShadow: 'none' }}
      />
    </div>
  );
};

export default OrdersList;
