import { Card } from 'antd';

import { IOrderCardProps } from './interfaces/IOrderCardProps';

import styles from './OrderCard.module.scss';

import { Typography } from '@/shared';

const OrderCard = ({ order, onClick }: IOrderCardProps): React.ReactElement => {
  return (
    <Card
      title={
        <Typography
          type={'textM'}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          Заказ #{order.id}
        </Typography>
      }
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography type={'description'}>{order.name}</Typography>
      </div>
    </Card>
  );
};

export default OrderCard;
