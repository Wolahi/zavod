import { ReactElement, useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './UsersList.module.scss';

import { UserCard } from '@/entities';
import { DrawerUserForm } from '@/features';
import type { IUserPreview } from '@/shared/config/interfaces/IUser.ts';
import { userPreviewMock } from '@/shared/config/userPreviewMock.ts';

const UsersList = (): ReactElement => {
  const [userData, setUserData] = useState<IUserPreview | null>(null);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (user?: IUserPreview) => {
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {userPreviewMock.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => handleDrawer(user)}
        />
      ))}
      <DrawerUserForm user={userData} open={open} onClose={onClose} />
      <FloatButton
        onClick={() => handleDrawer()}
        icon={<UserAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
    </div>
  );
};

export default UsersList;
