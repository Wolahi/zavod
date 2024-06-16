import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Drawer, Image, Upload } from 'antd';
import { RcFile } from 'antd/es/upload';

import { drawerReportFormSchema } from '../config/drawerReportFormSchema';

import { IDrawerReport } from './interfaces/IDrawerReport';
import { IDrawerReportForm } from './interfaces/IDrawerReportForm';

import styles from './DrawerReportForm.module.scss';

import useReportForm from '@/features/DrawerReportForm/module/useReportForm.ts';
import { DrawerFormExtra, Input, Select, Typography } from '@/shared';
import { EReportType } from '@/shared/config/interfaces/EReportType.ts';
import { translateReportType } from '@/shared/config/translateReportType.ts';
import useGetAssortment from '@/shared/module/useGetAssortment.ts';
import useGetDepartment from '@/shared/module/useGetDepartment.ts';
import useGetObjs from '@/shared/module/useGetObjs.ts';
import useImageStorage from '@/shared/module/useImageStore.ts';

const DrawerNewUserForm = ({
  report,
  open,
  onClose,
  setReport,
}: IDrawerReport): React.ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerReportForm>({
    resolver: yupResolver(drawerReportFormSchema),
  });
  const { setImageInStorage, image, deleteImage, loading } = useImageStorage();
  const { objs } = useGetObjs();
  const { assortment } = useGetAssortment();
  const { department } = useGetDepartment();
  const { addReport, updateReport, deleteReport } = useReportForm();

  useEffect(() => {
    if (report) {
      reset({
        obj: report?.obj.id,
        assortment: report?.assortment.id,
        department: report?.department.id,
        type: report.type,
        count: Number(report ? report?.count : 1),
      });
    }
  }, [report, reset]);

  const handleChangeImage = async (info: RcFile) => {
    if (info) {
      await setImageInStorage(info);
      return 'все ок';
    }

    return 'Не оч';
  };

  const onSubmit = async (data: IDrawerReportForm) => {
    if (report) {
      const res = await updateReport(data, report.id);
      setReport((prev) => [
        ...prev.filter((rep) => rep.id !== res.data.id),
        res.data,
      ]);
      reset();
      onClose();
    } else {
      if (image) {
        const res = await addReport(data, image);
        setReport((prev) => [...prev, res.data]);
        reset();
        onClose();
      }
    }
  };

  const onDelete = async () => {
    if (report) {
      await deleteReport(report?.id);
      setReport((prev) => [...prev.filter((rep) => rep.id !== report.id)]);
      reset();
      onClose();
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
        {!report && (
          <div>
            {!image ? (
              <Upload
                listType='picture-card'
                showUploadList={false}
                action={handleChangeImage}
              >
                <button style={{ border: 0, background: 'none' }} type='button'>
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 8 }}>Загрузить</div>
                </button>
              </Upload>
            ) : (
              <Button
                danger
                className={styles.imagePreview}
                onClick={deleteImage}
              >
                <Image src={image.url} alt='fd' preview={false} />
              </Button>
            )}
          </div>
        )}
        <Controller
          control={control}
          name='department'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              value={value}
              label={'Отдел'}
              options={department.map((department) => ({
                value: department.id,
                label: department.name,
              }))}
              placeholder={'Введите отдел'}
              error={error?.message}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='obj'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label={'Объект'}
              value={value}
              onChange={onChange}
              options={objs.map((obj) => ({
                value: obj.id,
                label: obj.name,
              }))}
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
              label={'Сортамент'}
              options={assortment.map((assortment) => ({
                value: assortment.id,
                label: `${assortment.name} Вес: ${assortment.count}тн`,
              }))}
              value={value}
              onChange={onChange}
              placeholder={'Введите сортамент'}
              error={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='type'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label={'Тип работ'}
              options={Object.keys(translateReportType).map((type) => ({
                value: type,
                label: translateReportType[type as EReportType],
              }))}
              value={value}
              onChange={onChange}
              placeholder={'Введите тип'}
              error={error?.message}
            />
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
  );
};

export default DrawerNewUserForm;
