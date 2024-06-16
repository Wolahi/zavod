import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import styles from './DrawerAssortmentForm.module.scss';

import { drawerAssortmentFormSchema } from '@/features/DrawerAssortmentForm/config/drawerAssortmentFormSchema';
import useAssortmentForm from '@/features/DrawerAssortmentForm/module/useAssortmentForm';
import { IDrawerAssortment } from '@/features/DrawerAssortmentForm/ui/interfaces/IDrawerAssortment';
import { IDrawerAssortmentForm } from '@/features/DrawerAssortmentForm/ui/interfaces/IDrawerAssortmentForm';
import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerAssortmentForm = ({
  assortment,
  open,
  onClose,
  setAssortment,
}: IDrawerAssortment) => {
  const { control, handleSubmit, reset } = useForm<IDrawerAssortmentForm>({
    resolver: yupResolver(drawerAssortmentFormSchema),
  });
  const { addAssortment, updateAssortment, deleteAssortment } =
    useAssortmentForm();

  useEffect(() => {
    if (assortment) {
      reset({
        name: assortment?.name,
        count: Number(assortment?.count),
      });
    }

    return () => {
      reset();
    };
  }, [assortment, reset]);

  const onSubmit = async (data: IDrawerAssortmentForm) => {
    if (assortment) {
      const res = await updateAssortment(assortment?.id, data);
      setAssortment((prev) => [
        ...prev.filter((prev) => prev.id !== res.data.id),
        res.data,
      ]);
    } else {
      const res = await addAssortment(data);
      if (res.data) {
        setAssortment((prev) => [...prev, res.data]);
      }
    }
    onClose();
    reset();
  };

  const onDelete = async () => {
    if (assortment) {
      await deleteAssortment(assortment?.id);
      setAssortment((prev) =>
        prev.filter((prev) => prev.id !== assortment?.id)
      );
    }
    onClose();
    reset();
  };

  return (
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
          name='count'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={Number(value)}
              label={'Вес (тн)'}
              name={'count'}
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
  );
};

export default DrawerAssortmentForm;
