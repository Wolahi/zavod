import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import styles from './DrawerUserForm.module.scss';

import { drawerUserFormSchema } from '@/features/DrawerUserForm/config/drawerUserFormSchema';
import type { IDrawerUser } from '@/features/DrawerUserForm/ui/interfaces/IDrawerUser';
import type { IDrawerUserForm } from '@/features/DrawerUserForm/ui/interfaces/IDrawerUserForm';
import { DrawerFormExtra, PasswordButtonEye } from '@/shared';
import { Input, Select, Typography } from '@/shared';
import { departmentPreviewMock } from '@/shared/config/departmentPreviewMock';
import { rolesOptions } from '@/shared/config/rolesOption.ts';

const DrawerUserForm = ({
  user,
  open,
  onClose,
}: IDrawerUser): React.ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerUserForm>({
    resolver: yupResolver(drawerUserFormSchema(!user)),
  });
  const [isClose, setIsClose] = useState(true);

  useEffect(() => {
    reset({
      login: user?.login,
      role: user?.role,
      department: user?.department,
    });
  }, [user, reset]);

  const onSubmit = (data: IDrawerUserForm) => {
    console.log(data);
    onClose();
    reset();
  };

  const onDelete = () => {
    console.log('deleted');
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
          user ? (
            <DrawerFormExtra
              handleSubmit={handleSubmit(onSubmit)}
              onDelete={onDelete}
            />
          ) : (
            <div className={styles.buttonsWrapper}>
              <Button
                type='primary'
                htmlType={'submit'}
                onClick={handleSubmit(onSubmit)}
              >
                Добавить
              </Button>
            </div>
          )
        }
      >
        <div className={styles.drawerBody}>
          <Typography type={'textM'}>
            {user ? 'Редактирование пользователя' : 'Добавление пользователя'}
          </Typography>
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
          {!user && (
            <Controller
              control={control}
              name='password'
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
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
                    <PasswordButtonEye
                      isClose={isClose}
                      onClick={() => setIsClose((prev) => !prev)}
                    />
                  }
                />
              )}
            />
          )}
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
              <Select
                value={value}
                label={'Отдел'}
                placeholder={'Выберите отдел'}
                options={departmentPreviewMock.map((department) => ({
                  label: department.name,
                  value: department.name,
                }))}
                onChange={onChange}
                error={error?.message}
                allowClear
              />
            )}
          />
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerUserForm;
