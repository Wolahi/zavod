import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { drawerWorkPlanFormSchema } from '../config/drawerWorkPlanFormSchema';
import { IDrawerWorkPlan } from '../interfaces/IDrawerWorkPlan';
import { IDrawerWorkPlanForm } from '../interfaces/IDrawerWorkPlanForm';
import useWorkPlanForm from '../module/useWorkPlanForm';

import styles from './DrawerWorkPlanForm.module.scss';

import { Input, Select, Typography } from '@/shared';
import useGetAssortment from '@/shared/module/useGetAssortment';

const DrawerWorkPlan = ({
  workPlan,
  open,
  onClose,
  setWorkPlanList,
}: IDrawerWorkPlan): React.ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerWorkPlanForm>({
    resolver: yupResolver(drawerWorkPlanFormSchema),
  });
  const { assortment } = useGetAssortment();
  const { addWorkPlan } = useWorkPlanForm();

  useEffect(() => {
    if (workPlan) {
      reset({
        objId: workPlan?.objId.id,
        count: Number(workPlan ? workPlan?.count : 1),
      });
    }

    return () => {
      reset();
    };
  }, [workPlan, reset]);

  const onSubmit = async (data: IDrawerWorkPlanForm) => {
    if (workPlan) {
      const res = await addWorkPlan(data);
      setWorkPlanList((prev) => [
        ...prev.filter((prev) => prev.objId.id !== res.data.objId.id),
        res.data,
      ]);
    } else {
      const res = await addWorkPlan(data);
      if (res.data) {
        setWorkPlanList((prev) => [...prev, res.data]);
      }
    }
    reset();
    onClose();
  };

  return (
    <Drawer
      styles={{ body: { padding: '15px' } }}
      placement={'right'}
      width={520}
      onClose={onClose}
      open={open}
      extra={
        workPlan ? (
          <div className={styles.buttonsWrapper}>
            <Button
              type='primary'
              htmlType={'submit'}
              onClick={handleSubmit(onSubmit)}
            >
              Обновить
            </Button>
          </div>
        ) : (
          <div className={styles.buttonsWrapper}>
            <Button
              type='primary'
              htmlType={'submit'}
              onClick={handleSubmit(onSubmit)}
            >
              Загрузить
            </Button>
          </div>
        )
      }
    >
      <div className={styles.drawerBody}>
        <Typography type={'textM'}>
          {workPlan ? 'Редактирование' : 'Добавление'}
          рабочего плана
        </Typography>

        <Controller
          control={control}
          name='objId'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label={'Сортамент'}
              options={assortment.map((assortment) => ({
                value: assortment.id,
                label: `${assortment.name} Вес: ${assortment.count}тн`,
              }))}
              value={value}
              onChange={onChange}
              placeholder={'Выберите сортамент'}
              error={error?.message}
              disabled={!!workPlan}
            />
          )}
        />

        <Controller
          control={control}
          name='count'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={Number(value)}
              label={'Норма'}
              name={'count'}
              placeholder={'Введите норму'}
              error={error?.message}
              onChange={onChange}
              type='number'
              min={0}
            />
          )}
        />
      </div>
    </Drawer>
  );
};

export default DrawerWorkPlan;
