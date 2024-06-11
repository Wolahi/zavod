import React from "react";
import { Card } from "antd";

import styles from "./UserCard.module.scss";

import { IUserCardProps } from "@/entities/UserCard/ui/interfaces/IUserCardProps.ts";
import { Typography } from "@/shared";

const UserCard = ({ user, onClick }: IUserCardProps): React.ReactElement => {
  return (
    <Card
      title={<Typography type={"textM"}>{user.login}</Typography>}
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography
          type={"description"}
        >{`Отдел: ${user.department}`}</Typography>
      </div>
    </Card>
  );
};

export default UserCard;
