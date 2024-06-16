import { useState } from 'react';
import create from '@ant-design/icons/lib/components/IconFont';
import { DatePicker, Table } from 'antd';
import dayjs from 'dayjs';

import styles from './ReportTable.module.scss';

import { Select } from '@/shared';
import { departmentPreviewMock } from '@/shared/config/departmentPreviewMock';
import { IReport } from '@/shared/config/interfaces/IReport';
import { reportPreviewMock } from '@/shared/config/reportPreviewMock';

const { Column, ColumnGroup } = Table;
const { RangePicker } = DatePicker;

const ReportTable = () => {
  const [selectValue, setSelectValue] = useState();

  const handleSelect = (data: any) => {
    setSelectValue(data);
  };
  const handleDatePicker = (data: string[]) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <RangePicker
          format={'DD-MM-YYYY'}
          onChange={(value, dateString) => {
            handleDatePicker(dateString);
          }}
        />
        <Select
          value={selectValue}
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
          onChange={handleSelect}
          allowClear
        />
      </div>
      <div className={styles.tables}>
        <Table dataSource={reportPreviewMock} pagination={false} rowKey={'id'}>
          <Column
            title='№ п/п'
            dataIndex='id'
            key='id'
            width='60px'
            align='center'
          />
          <Column
            title='Заказ'
            key='assortmentName'
            align='center'
            render={() => '203 - МАХ ТЦ "Максимир"'}
          />
          <Column
            title='Наименование'
            key='assortmentName'
            align='center'
            render={(report) => report.assortment.name}
          />
          <Column
            title='Объект'
            key='objectName'
            align='center'
            render={(report) => report.object.name}
          />

          <ColumnGroup title='1 ед.'>
            <Column
              title='шт.'
              key='pieceName'
              align='center'
              render={() => 1}
            />
            <Column
              title='тн.'
              key='weightOfPieceName'
              align='center'
              render={(report) => report.assortment.weight}
            />
          </ColumnGroup>
          <ColumnGroup title='Количество'>
            <Column
              title='шт.'
              key='pieceName'
              align='center'
              render={(report) => report.count}
            />
            <Column
              title='тн.'
              key='totalWeight'
              align='center'
              render={(report) =>
                (report.count * report.assortment.weight).toFixed(3)
              }
            />
          </ColumnGroup>
        </Table>
      </div>
    </div>
  );
};

export default ReportTable;
