import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer } from 'antd';

import { IDrawerNewReport } from './interfaces/IDrawerNewReport';
import { IDrawerNewReportForm } from './interfaces/IDrawerNewReportForm';

import styles from './DrawerNewReportForm.module.scss';

import { drawerNewReportFormSchema } from '@/features/DrawerNewReportForm/config/drawerNewReportFormSchema.ts';
import { Input, Typography } from '@/shared';

const DrawerNewUserForm = ({
  open,
  onClose,
}: IDrawerNewReport): React.ReactElement => {
  const { control, handleSubmit } = useForm<IDrawerNewReportForm>({
    resolver: yupResolver(drawerNewReportFormSchema),
  });

  const onSubmit = (data: IDrawerNewReportForm) => {
    console.log(data);
    //reset();
    //onClose();
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
          <div className={styles.buttonsWrapper}>
            <Button
              type='primary'
              htmlType={'submit'}
              onClick={handleSubmit(onSubmit)}
            >
              Загрузить
            </Button>
          </div>
        }
      >
        <div className={styles.drawerBody}>
          <Typography type={'textM'}>Добавление отчета</Typography>
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
