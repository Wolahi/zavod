import { Card } from 'antd';

import { IDepartmentCardProps } from '../interfaces/IDepartmentCardProps';

import styles from './DepartmentCard.module.scss';

import { Typography } from '@/shared';

const DepartmentCard = ({
  department,
  onClick,
}: IDepartmentCardProps): React.ReactElement => {
  return (
    <div>
      <Card
        title={<Typography type={'textM'}>{department.name}</Typography>}
        hoverable
        onClick={onClick}
      >
        <div className={styles.card__body}>
          <Typography
            type={'description'}
          >{`Работников: ${department.users.length}`}</Typography>
        </div>
      </Card>
    </div>
  );
};

export default DepartmentCard;
