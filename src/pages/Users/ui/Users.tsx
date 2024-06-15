import React from 'react';

import styles from './Users.module.scss';

import { UsersList } from '@/widgets';

const Users = (): React.ReactElement => {
  return (
    <div className={styles.root}>
      <UsersList />
    </div>
  );
};

export default Users;
