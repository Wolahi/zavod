import { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import styles from './PieChart.module.scss';

import { pieChartMock } from '@/shared/config/pieChartMock';

const PieChart = () => {
  useEffect(() => {
    let root = am5.Root.new('chartdiv');
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.gridLayout,
      })
    );
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'country',
        valueField: 'sales',
      })
    );
    series.data.setAll(pieChartMock);

    return () => {
      root.dispose();
    };
  });

  return <div id='chartdiv' className={styles.root}></div>;
};

export default PieChart;
