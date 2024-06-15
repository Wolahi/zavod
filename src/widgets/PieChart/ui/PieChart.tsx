import { useEffect } from 'react';

import styles from './PieChart.module.scss';

import { pieChartMock } from '@/shared/config/pieChartMock';
import { useCreatePieChart } from '@/shared/lib/hooks/useCreatePieChart/useCreatePieChart';

const PieChart = () => {
  const [createRoot] = useCreatePieChart();
  useEffect(() => {
    let root = createRoot(
      'Series',
      'country',
      'sales',
      'chartdiv',
      pieChartMock
    );
    return () => {
      root.dispose();
    };
  });
  return (
    <div className={styles.root}>
      <div
        id='chartdiv'
        style={{
          width: '100%',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export default PieChart;
