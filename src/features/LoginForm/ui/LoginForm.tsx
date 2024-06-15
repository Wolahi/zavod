import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';

import styles from './style.module.scss';

import { loginSchema } from '@/features/LoginForm/config/LoginSchema/LoginSchema.ts';
import type { ILoginForm } from '@/features/LoginForm/ui/interfaces/ILoginForm.ts';
import { Input, PasswordButtonEye, Typography } from '@/shared';

const LoginFrom = (): React.ReactElement => {
  const [isClose, setIsClose] = useState(true);

  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILoginForm) => console.log(data);

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Typography type={'title'}>Вход в систему</Typography>
      <Controller
        control={control}
        name='login'
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input
            value={value?.trim()}
            onChange={onChange}
            label={'Логин'}
            name={'login'}
            placeholder={'Логин'}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input
            label={'Пароль'}
            value={value?.trim()}
            onChange={onChange}
            name={'password'}
            maxLength={32}
            minLength={8}
            placeholder={'Пароль'}
            type={isClose ? 'password' : 'text'}
            error={error?.message}
            suffix={
              <PasswordButtonEye
                isClose={isClose}
                onClick={() => setIsClose((prev) => !prev)}
              />
            }
          />
        )}
      />
      <Button type='primary' htmlType={'submit'}>
        Войти
      </Button>
    </form>
  );
};

export default LoginFrom;
