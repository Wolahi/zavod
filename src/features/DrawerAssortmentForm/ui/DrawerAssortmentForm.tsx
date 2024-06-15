import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { drawerAssortmentFormSchema } from '../config/drawerAssortmentFormSchema';

import { IDrawerAssortment } from './interfaces/IDrawerAssortment';
import { IDrawerAssortmentForm } from './interfaces/IDrawerAssortmentForm';

import styles from './DrawerAssortmentForm.module.scss';

import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerAssortmentForm = ({
  assortment,
  open,
  onClose,
}: IDrawerAssortment) => {
  const { control, handleSubmit, reset } = useForm<IDrawerAssortmentForm>({
    resolver: yupResolver(drawerAssortmentFormSchema),
  });

  useEffect(() => {
    reset({
      name: assortment?.name,
      weight: Number(assortment?.weight),
    });
  }, [assortment, reset]);

  const onSubmit = (data: IDrawerAssortmentForm) => {
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
          assortment ? (
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
            {assortment ? 'Редактирование сортамента' : 'Добавление сортамента'}
          </Typography>
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value?.trim()}
                label={'Название сортамента'}
                name={'name'}
                placeholder={'Введите название сортамента'}
                error={error?.message}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='weight'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={Number(value)}
                label={'Вес (тн)'}
                name={'weight'}
                placeholder={'Введите вес (тн)'}
                error={error?.message}
                onChange={onChange}
                type='number'
                min={0}
                step={0.001}
              />
            )}
          />
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerAssortmentForm;
