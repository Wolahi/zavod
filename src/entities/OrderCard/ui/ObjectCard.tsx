import { Card } from 'antd';

import { IObjectCardProps } from './interfaces/IObjectCardProps';

import styles from './ObjectCard.module.scss';

import { Typography } from '@/shared';

const ObjectCard = ({
  object,
  onClick,
}: IObjectCardProps): React.ReactElement => {
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
          Объект #{object.id}
        </Typography>
      }
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography type={'description'}>{object.name}</Typography>
      </div>
    </Card>
  );
};

export default ObjectCard;
