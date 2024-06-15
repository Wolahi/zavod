import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { drawerOrderFormSchema } from '../config/drawerOrderFormSchema';

import { IDrawerOrder } from './interfaces/IDrawerOrder';
import { IDrawerOrderForm } from './interfaces/IDrawerOrderForm';

import styles from './DrawerOrderForm.module.scss';

import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerOrderForm = ({ order, open, onClose }: IDrawerOrder) => {
  const { control, handleSubmit, reset } = useForm<IDrawerOrderForm>({
    resolver: yupResolver(drawerOrderFormSchema),
  });

  useEffect(() => {
    reset({
      name: order?.name,
    });
  }, [order, reset]);

  const onSubmit = (data: IDrawerOrderForm) => {
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
          order ? (
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
            {order ? 'Редактирование заказа' : 'Добавление заказа'}
          </Typography>
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                label={'Название заказа'}
                name={'name'}
                placeholder={'Введите название заказа'}
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

export default DrawerOrderForm;
