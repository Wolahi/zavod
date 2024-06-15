import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './DrawerFormExtra.module.scss';

import type { IDrawerFormExtra } from '@/shared/ui/DrawerFormExtra/ui/interfaces/IDrawerFormExtra';

export const DrawerFormExtra = ({
  handleSubmit,
  onDelete,
}: IDrawerFormExtra): React.ReactElement => {
  return (
    <div className={styles.buttonsWrapper}>
      <Button type='primary' htmlType={'submit'} onClick={handleSubmit}>
        Обновить
      </Button>
      <Button
        type={'primary'}
        danger
        onClick={onDelete}
        style={{
          padding: '10px',
        }}
      >
        <DeleteOutlined />
      </Button>
    </div>
  );
};
