import { Card } from 'antd';

import { IDepartmentCardProps } from './interfaces/IDepartmentCardProps';

import styles from './DepartmentCard.module.scss';

import { Typography } from '@/shared';

const DepartmentCard = ({
  department,
  onClick,
}: IDepartmentCardProps): React.ReactElement => {
  return (
    <Card
      title={<Typography type={'textM'}>{department.name}</Typography>}
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography type={'description'}>
          {department.foundation
            ? 'Производственный отдел'
            : 'Не производственный отдел'}
        </Typography>
      </div>
    </Card>
  );
};

export default DepartmentCard;
