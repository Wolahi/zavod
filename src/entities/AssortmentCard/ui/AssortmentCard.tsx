import { Card } from 'antd';

import { IAssortmentCardProps } from './interfaces/IAssortmentCardProps';

import styles from './AssortmentCard.module.scss';

import { Typography } from '@/shared';

const AssortmentCard = ({
  assortment,
  onClick,
}: IAssortmentCardProps): React.ReactElement => {
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
          {assortment.name}
        </Typography>
      }
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography type={'description'}>
          1 шт. – {assortment.weight}
        </Typography>
      </div>
    </Card>
  );
};

export default AssortmentCard;
