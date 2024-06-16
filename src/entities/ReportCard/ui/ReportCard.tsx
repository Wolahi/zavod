import { Card, Image } from 'antd';

import { IReportCardProps } from './interfaces/IReportCardProps';

import styles from './ReportCard.module.scss';

import { Typography } from '@/shared';
import { EReportType } from '@/shared/config/interfaces/EReportType.ts';
import { translateReportType } from '@/shared/config/translateReportType.ts';

const ReportCard = ({
  report,
  onClick,
}: IReportCardProps): React.ReactElement => {
  return (
    <Card
      className={styles.root}
      cover={<Image src={report.image.url} preview={false} />}
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Card.Meta
          title={
            <Typography
              type={'textM'}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              Отчет #{report.id}
              <Typography type={'small'}>{report.date}</Typography>
            </Typography>
          }
        />
        <Typography
          type={'description'}
        >{`Деталь: ${report.assortment.name} – ${report.count} шт.`}</Typography>
        <Typography
          type={'description'}
        >{`Объект: ${report.obj.name}`}</Typography>
        <Typography
          type={'description'}
        >{`Создал: ${report.user.name}`}</Typography>
        <Typography
          type={'description'}
        >{`Тип Работ: ${translateReportType[report.type as EReportType]}`}</Typography>
      </div>
    </Card>
  );
};

export default ReportCard;
