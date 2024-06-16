import styles from './Dictionary.module.scss';

import { Typography } from '@/shared';
import { AssortmentsList, ObjectsList } from '@/widgets';

const Dictionary = (): React.ReactElement => {
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
          Объекты
        </Typography>
        <ObjectsList />
      </div>
    </div>
  );
};

export default Dictionary;
