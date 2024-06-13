import { ReactElement, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Drawer } from 'antd';

import styles from './DrawerEditUserForm.module.scss';

import { drawerFormSchema } from '@/features/DrawerEditUserForm/config/drawerFormSchema.ts';
import type { IDrawerEditUser } from '@/features/DrawerEditUserForm/ui/interfaces/IDrawerEditUser';
import type { IDrawerEditUserForm } from '@/features/DrawerEditUserForm/ui/interfaces/IDrawerEditUserForm';
import { DrawerFormExtra } from '@/shared';
import { Input, Select, Typography } from '@/shared';
import { rolesOptions } from '@/shared/config/rolesOption.ts';

const DrawerEditUserForm = ({
  user,
  open,
  label,
  onClose,
}: IDrawerEditUser): ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerEditUserForm>({
    resolver: yupResolver(drawerFormSchema),
  });

  useEffect(() => {
    reset({
      login: user?.login,
      role: user?.role,
      department: user?.department,
    });
  }, [user, reset]);

  const isChanged = (data: IDrawerEditUserForm) =>
    user?.login !== data.login ||
    user?.department !== data.department ||
    user?.role !== data.role;

  const onSubmit = (data: IDrawerEditUserForm) => {
    if (isChanged(data)) {
      console.log(data);
    } else {
      console.log('Изменять нечего');
    }
    onClose();
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
          <DrawerFormExtra
            handleSubmit={handleSubmit(onSubmit)}
            onDelete={onDelete}
          />
        }
      >
        <div className={styles.drawerBody}>
          <Typography type={'textM'}>{label}</Typography>
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

export default DrawerEditUserForm;
