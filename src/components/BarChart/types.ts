export interface BarChartDataItem {
  label: string;
  value: number;
}

export interface ChartItemProps {
  $color: string;
  $width: string;
}

export interface BarChartProps {
  data: BarChartDataItem[];
  colors?: string[];
}

export interface LegendProps {
  data: BarChartDataItem[];
  colors: string[];
}

export interface LegendItemProps {
  $color: string;
}
