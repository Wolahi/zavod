import { Card } from 'antd';

import { IWorkPlanCardProps } from './interfaces/IWorkPlanCardProps';

import styles from './WorkPlanCard.module.scss';

import { Typography } from '@/shared';

const WorkPlanCard = ({
  workPlan,
  onClick,
}: IWorkPlanCardProps): React.ReactElement => {
  return (
    <Card
      title={
        <Typography type={'textM'}>{workPlan?.assortment.name}</Typography>
      }
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography type={'description'}>
          Норма: {workPlan?.count} шт.
        </Typography>
      </div>
    </Card>
  );
};

export default WorkPlanCard;
