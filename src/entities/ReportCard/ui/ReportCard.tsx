import { Card } from 'antd';

import { IReportCardProps } from './interfaces/IReportCardProps';

import styles from './ReportCard.module.scss';

import { Typography } from '@/shared';

const ReportCard = ({
  report,
  onClick,
}: IReportCardProps): React.ReactElement => {
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
          Отчет #{report.id}
          <Typography type={'small'}>{report.createdAt}</Typography>
        </Typography>
      }
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography
          type={'description'}
        >{`Деталь: ${report.assortment.name} – ${report.count} шт.`}</Typography>
        <Typography
          type={'description'}
        >{`Объект: ${report.object.name}`}</Typography>
      </div>
    </Card>
  );
};

export default ReportCard;
