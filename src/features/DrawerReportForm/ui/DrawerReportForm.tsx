import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { CheckboxProps } from 'antd';
import { Button, Checkbox, Drawer } from 'antd';

import { drawerReportFormSchema } from '../config/drawerReportFormSchema';

import { IDrawerReport } from './interfaces/IDrawerReport';
import { IDrawerReportForm } from './interfaces/IDrawerReportForm';

import styles from './DrawerReportForm.module.scss';

import { DrawerFormExtra, Input, Select, Typography } from '@/shared';
import { assortmentPreviewMock } from '@/shared/config/assortmentPreviewMock';
import { departmentPreviewMock } from '@/shared/config/departmentPreviewMock';
import { reportOptions } from '@/shared/config/reportOptions';

const DrawerReportForm = ({
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
      type: report?.type,
      isProduction: report?.isProduction,
      count: Number(report ? report?.count : 1),
    });
  }, [report, reset]);

  const onSubmit = (data: IDrawerReportForm) => {
    console.log(data);
    reset();
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
              <Select
                value={value}
                label={'Отдел'}
                placeholder={'Выберите отдел'}
                options={departmentPreviewMock.map(
                  (department) =>
                    [
                      {
                        label: department.name,
                        value: department.name,
                      },
                    ][0]
                )}
                onChange={onChange}
                error={error?.message}
                allowClear
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
              <Select
                value={value}
                label={'Сортамент'}
                placeholder={'Выберите сортамент'}
                options={assortmentPreviewMock.map(
                  (assortment) =>
                    [
                      {
                        label: assortment.name,
                        value: assortment.name,
                      },
                    ][0]
                )}
                onChange={onChange}
                error={error?.message}
                allowClear
              />
            )}
          />
          <Controller
            control={control}
            name='type'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Select
                value={value}
                label={'Тип отчета'}
                placeholder={'Выберите тип отчета'}
                options={reportOptions}
                onChange={onChange}
                error={error?.message}
                allowClear
              />
            )}
          />
          <Controller
            control={control}
            name='isProduction'
            render={({ field: { value, onChange } }) => (
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <Checkbox
                  name={'isProduction'}
                  value={value}
                  onChange={onChange}
                >
                  <Typography type={'subtitle'} style={{ color: '#b7b7b7' }}>
                    Производственный отдел
                  </Typography>
                </Checkbox>
              </div>
            )}
          />
          <Controller
            control={control}
            name='count'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={Number(value)}
                label={'Количество'}
                name={'count'}
                placeholder={'Введите количество'}
                error={error?.message}
                onChange={onChange}
                type='number'
                min={0}
              />
            )}
          />
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerReportForm;
