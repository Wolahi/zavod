import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { drawerDepartmentFormSchema } from '../config/drawerDepartmentFormSchema';
import { IDrawerDepartment } from '../interfaces/IDrawerDepartment';
import { IDrawerDepartmentForm } from '../interfaces/IDrawerDepartmentForm';

import styles from './DrawerDepartment.module.scss';

import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerDepartmentForm = ({
  department,
  open,
  onClose,
}: IDrawerDepartment) => {
  const { control, handleSubmit, reset } = useForm<IDrawerDepartmentForm>({
    resolver: yupResolver(drawerDepartmentFormSchema),
  });

  useEffect(() => {
    reset({
      name: department?.name,
    });
  }, [department, reset]);

  const onSubmit = (data: IDrawerDepartmentForm) => {
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
          department ? (
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
            {department ? 'Редактирование отдела' : 'Добавление отдела'}
          </Typography>
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value?.trim()}
                label={'Название отдела'}
                name={'name'}
                placeholder={'Введите название отдел'}
                error={error?.message}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Typography type={'textM'}>Список работников:</Typography>
          {department?.users.map((user) => (
            <div key={user.id}>{user.login}</div>
          ))}
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerDepartmentForm;
