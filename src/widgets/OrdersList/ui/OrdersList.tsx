import { useState } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './OrdersList.module.scss';

import { OrderCard } from '@/entities';
import { DrawerOrderForm } from '@/features';
import { IOrder } from '@/shared/config/interfaces/IOrder';
import { orderPreviewMock } from '@/shared/config/orderPreviewMock';

const OrdersList = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState<IOrder | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (order?: IOrder) => {
    if (order) {
      setOrderData(order);
      console.log(order);
    } else {
      setOrderData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {orderPreviewMock.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onClick={() => handleDrawer(order)}
        />
      ))}
      <FloatButton
        shape='square'
        tooltip={<div>Заказ</div>}
        icon={<FileAddOutlined />}
        onClick={() => handleDrawer()}
        style={{ bottom: '50px', boxShadow: 'none' }}
      />
      <DrawerOrderForm open={open} onClose={onClose} order={orderData} />
    </div>
  );
};

export default OrdersList;
