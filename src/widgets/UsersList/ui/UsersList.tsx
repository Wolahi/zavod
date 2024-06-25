import { ReactElement, useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import styles from "./UsersList.module.scss";

import { UserCard } from "@/entities";
import { DrawerUserForm } from "@/features";
import { IUserOutput } from "@/shared/config/interfaces/IUserOutput.ts";
import useGetListUsers from "@/widgets/UsersList/model/useGetListUsers.ts";

const UsersList = (): ReactElement => {
  const [userData, setUserData] = useState<IUserOutput | null>(null);
  const [open, setOpen] = useState(false);
  const { users, setUsers } = useGetListUsers();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (user?: IUserOutput) => {
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
      console.log("first");
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => handleDrawer(user)}
        />
      ))}
      <DrawerUserForm
        user={userData}
        open={open}
        onClose={onClose}
        setUsers={setUsers}
      />
      <FloatButton
        onClick={() => handleDrawer()}
        icon={<UserAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
    </div>
  );
};

export default UsersList;
