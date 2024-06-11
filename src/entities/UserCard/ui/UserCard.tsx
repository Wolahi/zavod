import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";

import styles from "./UserCard.module.scss";

import { IUserCardProps } from "@/entities/UserCard/ui/interfaces/IUserCardProps.ts";
import { Typography } from "@/shared";

const UserCard = ({ user }: IUserCardProps): React.ReactElement => {
  return (
    <Card
      title={<Typography type={"textM"}>{user.login}</Typography>}
      actions={[<EditOutlined key="edit" />]}
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
