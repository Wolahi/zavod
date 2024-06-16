import { useState } from 'react';
import { DatePicker, Table } from 'antd';

import styles from './ReportTable.module.scss';

import { Select } from '@/shared';
import { departmentPreviewMock } from '@/shared/config/departmentPreviewMock';
import { IReport } from '@/shared/config/interfaces/IReport';
import { reportPreviewMock } from '@/shared/config/reportPreviewMock';

const { Column, ColumnGroup } = Table;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: (
      <span>
        №<br />
        п/п
      </span>
    ),
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: '60px',
  },
  {
    title: 'Заказ',
    dataIndex: 'orderName',
    align: 'center',
    render: () => '203 - МАХ ТЦ "Максимир"',
  },
  {
    title: 'Наименование',
    dataIndex: 'assortmentName',
    align: 'center',
    render: (report: IReport) => report.assortment.name,
  },
];

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
      <div className={styles.pickers}>
        <RangePicker
          format={'DD-MM-YYYY'}
          onChange={(value, dateString) => {
            handleDatePicker(dateString);
          }}
        />
        <Select
          value={selectValue}
          placeholder={'Выберите отдел'}
          options={departmentPreviewMock.map((department) => ({
            label: department.name,
            value: department.name,
          }))}
          onChange={handleSelect}
          allowClear
        />
      </div>
      <div className={styles.tables}>
        <Table
          dataSource={reportPreviewMock}
          pagination={false}
          rowKey={'id'}
          scroll={{ x: '100%' }}
        >
          <Column
            title={
              <span>
                №<br />
                п/п
              </span>
            }
            dataIndex='id'
            key='id'
            width='60px'
            align='center'
          />
          <Column
            title='Заказ'
            key='orderName'
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
