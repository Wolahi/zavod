import { ReactElement, useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import styles from './UsersList.module.scss';

import { UserCard } from '@/entities';
import { DrawerForm, DrawerNewUserForm } from '@/features';
import type { IUserPreview } from '@/shared/config/interfaces/IUser.ts';
import { userPreviewMock } from '@/shared/config/userPreviewMock.ts';

const UsersList = (): ReactElement => {
  const [userData, setUserData] = useState<IUserPreview>();
  const [openEdit, setOpenEdit] = useState(false);
  const [openNew, setOpenNew] = useState(false);

  const showEditDrawer = () => {
    setOpenEdit(true);
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleEditDrawer = (user: IUserPreview) => {
    setUserData(user);
    console.log(user);
    showEditDrawer();
  };

  const showNewDrawer = () => {
    setOpenNew(true);
  };

  const onCloseNew = () => {
    setOpenNew(false);
  };

  const handleNewDrawer = () => {
    showNewDrawer();
  };

  return (
    <div className={styles.root}>
      {userPreviewMock.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => handleEditDrawer(user)}
        />
      ))}
      <DrawerForm
        user={userData}
        open={openEdit}
        onClose={onCloseEdit}
        label={'Редактирование пользователя'}
      />
      <FloatButton
        onClick={() => handleNewDrawer()}
        icon={<UserAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
      <DrawerNewUserForm open={openNew} onClose={onCloseNew} />
    </div>
  );
};

export default UsersList;
