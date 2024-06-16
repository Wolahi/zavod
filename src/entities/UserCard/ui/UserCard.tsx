import React from "react";
import { Card } from "antd";

import styles from "./UserCard.module.scss";

import { IUserCardProps } from "@/entities/UserCard/ui/interfaces/IUserCardProps.ts";
import { Typography } from "@/shared";
import { rolesTranslate } from "@/shared/config/rolesTranslate.ts";

const UserCard = ({ user, onClick }: IUserCardProps): React.ReactElement => {
  return (
    <Card
      title={<Typography type={"textM"}>{user.username}</Typography>}
      hoverable
      onClick={onClick}
    >
      <div className={styles.card__body}>
        <Typography type={"description"}>{`Имя: ${user.name}`}</Typography>
        <Typography
          type={"description"}
        >{`Отдел: ${user.department.name}`}</Typography>
        <Typography
          type={"description"}
        >{`Роль: ${rolesTranslate[user.roles[0]]}`}</Typography>
      </div>
    </Card>
  );
};

export default UserCard;
