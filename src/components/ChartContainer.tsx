import React from 'react';
import { Chart, GoogleChartWrapperChartType } from 'react-google-charts';
import '../styles/ChartContainer.scss';

interface ChartContainerProps {
  data: any[];
  options: object;
  title: string;
  isFocused: boolean; // New prop for focus mode
  onToggleFocus: () => void; // New prop for toggle focus
  chartType: GoogleChartWrapperChartType,
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, options, chartType, title, isFocused, onToggleFocus }) => {
  return (
    <div className={`chart-container`}>
      <h3>{title}</h3>
      <Chart chartType={chartType} width={isFocused ? '100%' : '400px'} height={isFocused ? '90%' : '400px'} data={data} options={options} />
      <button className={`focus-button ${isFocused ? 'active' : ''}`} onClick={onToggleFocus}>
        {isFocused ? 'Exit Focus Mode' : 'Focus Mode'}
      </button>
    </div>
  );
};

export default ChartContainer;
