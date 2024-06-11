import { ReactElement, useState } from "react";

import styles from "./UsersList.module.scss";

import { UserCard } from "@/entities";
import { DrawerForm } from "@/features";
import type { IUserPreview } from "@/shared/config/interfaces/IUser.ts";
import { userPreviewMock } from "@/shared/config/userPreviewMock.ts";

const UsersList = (): ReactElement => {
  const [userData, setUserData] = useState<IUserPreview>();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (user: IUserPreview) => {
    setUserData(user);
    console.log(user);
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
      <DrawerForm user={userData} open={open} onClose={onClose} />
    </div>
  );
};

export default UsersList;
