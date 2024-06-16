import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import styles from './DrawerObjectForm.module.scss';

import { drawerOrderFormSchema } from '@/features/DrawerOrderForm/config/drawerOrderFormSchema';
import useObjectForm from '@/features/DrawerOrderForm/module/useObjectForm';
import { IDrawerObject } from '@/features/DrawerOrderForm/ui/interfaces/IDrawerObject';
import { IDrawerObjectForm } from '@/features/DrawerOrderForm/ui/interfaces/IDrawerObjectForm';
import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerObjectForm = ({
  object,
  open,
  onClose,
  setObjects,
}: IDrawerObject) => {
  const { control, handleSubmit, reset } = useForm<IDrawerObjectForm>({
    resolver: yupResolver(drawerOrderFormSchema),
  });
  const { addObject, updateObject, deleteObject } = useObjectForm();

  useEffect(() => {
    if (object) {
      reset({
        name: object?.name,
      });
    }

    return () => {
      reset();
    };
  }, [object, reset]);

  const onSubmit = async (data: IDrawerObjectForm) => {
    if (object) {
      const res = await updateObject(object?.id, data);
      setObjects((prev) => [
        ...prev.filter((prev) => prev.id !== res.data.id),
        res.data,
      ]);
    } else {
      const res = await addObject(data);
      if (res.data) {
        setObjects((prev) => [...prev, res.data]);
      }
    }
    onClose();
    reset();
  };

  const onDelete = async () => {
    if (object) {
      await deleteObject(object?.id);
      setObjects((prev) => prev.filter((prev) => prev.id !== object?.id));
      onClose();
      reset();
    }
  };

  return (
    <Drawer
      styles={{ body: { padding: '15px' } }}
      placement={'right'}
      width={520}
      onClose={onClose}
      open={open}
      extra={
        object ? (
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
          {object ? 'Редактирование заказа' : 'Добавление заказа'}
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
  );
};

export default DrawerObjectForm;
