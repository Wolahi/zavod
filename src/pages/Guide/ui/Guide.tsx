import styles from './Guide.module.scss';

import { Typography } from '@/shared';
import { AssortmentsList, OrdersList } from '@/widgets';

const Guide = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <div>
        <Typography
          type='title'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Сортамент
        </Typography>
        <AssortmentsList />
      </div>
      <div>
        <Typography
          type='title'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Заказы
        </Typography>
        <OrdersList />
      </div>
    </div>
  );
};

export default Guide;
