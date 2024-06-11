import { ReactElement } from "react";

import styles from "./UsersList.module.scss";

import { UserCard } from "@/entities";
import { userPreviewMock } from "@/shared/config/userPreviewMock.ts";

const UsersList = (): ReactElement => {
  return (
    <div className={styles.root}>
      {userPreviewMock.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
