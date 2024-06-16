import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Drawer } from 'antd';

import styles from './DrawerDepartment.module.scss';

import { drawerDepartmentFormSchema } from '@/features/DrawerDepartmentForm/config/drawerDepartmentFormSchema';
import useDepartmentForm from '@/features/DrawerDepartmentForm/module/useDepartmentForm';
import { IDrawerDepartment } from '@/features/DrawerDepartmentForm/ui/interfaces/IDrawerDepartment';
import { IDrawerDepartmentForm } from '@/features/DrawerDepartmentForm/ui/interfaces/IDrawerDepartmentForm';
import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerDepartmentForm = ({
  department,
  open,
  onClose,
  setDepartment,
}: IDrawerDepartment) => {
  const { control, handleSubmit, reset } = useForm<IDrawerDepartmentForm>({
    resolver: yupResolver(drawerDepartmentFormSchema),
  });
  const { addDepartment, updateDepartment, deleteDepartment } =
    useDepartmentForm();

  useEffect(() => {
    if (department) {
      reset({
        name: department?.name,
        foundation: department?.foundation,
      });
    }

    return () => {
      reset();
    };
  }, [department, reset]);

  const onSubmit = async (data: IDrawerDepartmentForm) => {
    if (department) {
      const res = await updateDepartment(department?.id, data);
      setDepartment((prev) => [
        ...prev.filter((prev) => prev.id !== res.data.id),
        res.data,
      ]);
    } else {
      const res = await addDepartment(data);
      if (res.data) {
        setDepartment((prev) => [...prev, res.data]);
      }
    }
    onClose();
    reset();
  };

  const onDelete = async () => {
    if (department) {
      await deleteDepartment(department?.id);
      setDepartment((prev) =>
        prev.filter((prev) => prev.id !== department?.id)
      );
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
              value={value}
              label={'Название отдела'}
              name={'name'}
              placeholder={'Введите название отдел'}
              error={error?.message}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='foundation'
          render={({ field: { value, onChange } }) => (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <Checkbox name={'foundation'} checked={value} onChange={onChange}>
                <Typography
                  type={'subtitle'}
                  style={{ color: '#b7b7b7', userSelect: 'none' }}
                >
                  Производственный отдел
                </Typography>
              </Checkbox>
            </div>
          )}
        />
      </div>
      {/* {department && (
        <div style={{ marginTop: '10px' }}>
          <Typography type={'textM'}>Список работников</Typography>
          {department?.users.map((user) => (
            <div key={user.id}>{user.login}</div>
          ))}
        </div>
      )} */}
    </Drawer>
  );
};

export default DrawerDepartmentForm;
