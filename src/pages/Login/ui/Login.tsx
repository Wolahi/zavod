import React from 'react';

import styles from './style.module.scss';

import { LoginForm } from '@/features';

const Login = (): React.ReactElement => {
  return (
    <section className={styles.container}>
      <LoginForm />
    </section>
  );
};

export default Login;
