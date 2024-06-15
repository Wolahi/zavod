import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { IPieData } from '@/shared/config/interfaces/IPieData';

export const useCreatePieChart = () => {
  const createRoot = (
    name: string,
    categoryField: string,
    valueField: string,
    rootName: string,
    pieData: IPieData[]
  ) => {
    let root = am5.Root.new(rootName);
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout,
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: name,
        categoryField: categoryField,
        valueField: valueField,
        alignLabels: false,
      })
    );
    series.labels.template.setAll({
      text: '{category}',
      textType: 'circular',
      inside: true,
      radius: 10,
    });
    series.data.setAll(pieData);
    return root;
  };
  return [createRoot];
};
