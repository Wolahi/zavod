import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { drawerReportFormSchema } from '../config/drawerReportFormSchema';

import { IDrawerReport } from './interfaces/IDrawerReport';
import { IDrawerReportForm } from './interfaces/IDrawerReportForm';

import styles from './DrawerReportForm.module.scss';

import { DrawerFormExtra, Input, Typography } from '@/shared';

const DrawerNewUserForm = ({
  report,
  open,
  onClose,
}: IDrawerReport): React.ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerReportForm>({
    resolver: yupResolver(drawerReportFormSchema),
  });

  useEffect(() => {
    reset({
      object: report?.object.name,
      assortment: report?.assortment.name,
      department: report?.department,
      count: report?.count ? parseInt(report?.count) : 0,
    });
  }, [report, reset]);

  const onSubmit = (data: IDrawerReportForm) => {
    console.log(data);
    //reset();
    //onClose();
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
          report ? (
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
                Загрузить
              </Button>
            </div>
          )
        }
      >
        <div className={styles.drawerBody}>
          <Typography type={'textM'}>
            {report ? 'Редактирование отчета' : 'Добавление отчета'}
          </Typography>
          <Controller
            control={control}
            name='department'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value?.trim()}
                label={'Отдел'}
                name={'department'}
                placeholder={'Введите отдел'}
                error={error?.message}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='object'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label={'Объект'}
                value={value}
                onChange={onChange}
                name={'object'}
                placeholder={'Введите объект'}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='assortment'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label={'Сортамент'}
                name='assortment'
                value={value}
                onChange={onChange}
                placeholder={'Введите сортамент'}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='count'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                label={'Количество'}
                name={'count'}
                placeholder={'Введите количество'}
                error={error?.message}
                onChange={onChange}
                type='number'
                min={'0'}
              />
            )}
          />
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerNewUserForm;