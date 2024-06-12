import { ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { drawerNewUserFormSchema } from '../config/drawerNewUserFormSchema';

import { IDrawerNewUser } from './interfaces/IDrawerNewUser';
import { IDrawerNewUserForm } from './interfaces/IDrawerNewUserForm';

import styles from './DrawerNewUserForm.module.scss';

import { Input, Select, Typography } from '@/shared';
import { rolesOptions } from '@/shared/config/rolesOption.ts';

const DrawerNewUserForm = ({ open, onClose }: IDrawerNewUser): ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerNewUserForm>({
    resolver: yupResolver(drawerNewUserFormSchema),
  });
  const [isClose, setIsClose] = useState(true);

  const onSubmit = (data: IDrawerNewUserForm) => {
    console.log(data);
    reset();
    onClose();
  };

  return (
    <form>
      <Drawer
        styles={{ body: { padding: '15px' } }}
        placement={'right'}
        width={520}
        onClose={onClose}
        open={open}
        extra={
          <div className={styles.buttonsWrapper}>
            <Button
              type='primary'
              htmlType={'submit'}
              onClick={handleSubmit(onSubmit)}
            >
              Добавить
            </Button>
          </div>
        }
      >
        <div className={styles.drawerBody}>
          <Typography type={'textM'}>Добавление пользователя</Typography>
          <Controller
            control={control}
            name='login'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value?.trim()}
                label={'Логин'}
                name={'login'}
                placeholder={'Введите логин'}
                error={error?.message}
                onChange={onChange}
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
                placeholder={'Введите пароль'}
                type={isClose ? 'password' : 'text'}
                error={error?.message}
                suffix={
                  <button
                    className={styles.passwordShowButton}
                    type={'button'}
                    onClick={() => setIsClose((prev) => !prev)}
                  >
                    {isClose ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined style={{ color: '#1677ff' }} />
                    )}
                  </button>
                }
              />
            )}
          />
          <Controller
            control={control}
            name='role'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Select
                value={value}
                label={'Роль'}
                placeholder={'Выберите роль'}
                options={rolesOptions}
                onChange={onChange}
                error={error?.message}
                allowClear
              />
            )}
          />
          <Controller
            control={control}
            name='department'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                label={'Отдел'}
                name={'department'}
                placeholder={'Введите отдел'}
                error={error?.message}
                onChange={onChange}
              />
            )}
          />
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerNewUserForm;
