import React, { useEffect, useRef, useState } from 'react';
import SummaryCard from './SummaryCard';
import ChartContainer from './ChartContainer';
import data from '../testData/data.json';
import '../styles/Dashboard.scss';
import chartTypes from '../testData/googleChartTypes';

type props = { invertData: boolean };

const Dashboard: React.FC<props> = ({ invertData }) => {
  
  const chartsRef = useRef<HTMLDivElement[]>([]);

  const [focusedChartIndex, setFocusedChartIndex] = useState<number | null>(null);
  const usersByCompletionData = [
    ['Completion Group', 'Count'],
    ...data.usersByCompletion.map((item) => [item.group, item.count])
  ];

  const chartOptions = {
    chart: {
      title: 'Users by Completion Group',
    },
    colors: ['#f68b1e']
  };

  const toggleFocus = (index: number) => {
    setFocusedChartIndex(focusedChartIndex === index ? null : index);
  };
  useEffect(() => {
    if (focusedChartIndex !== null && chartsRef.current[focusedChartIndex]) {
      const chartElement = chartsRef.current[focusedChartIndex];
      const offset = 100; // Space to leave above the focused chart
      const topPosition = chartElement.getBoundingClientRect().top + window.scrollY - offset;

      // Smoothly scroll to the calculated position
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  }, [focusedChartIndex]);
  
  return (
    <div className="main-content">
      <div className="summary-cards">
        <SummaryCard title="All Users" value={data.totalUsers} />
        <SummaryCard title="% Completed Courses" value={`${data.completedCourses}%`} />
        <SummaryCard title="% Incomplete Courses" value={`${data.incompleteCourses}%`} />
        <SummaryCard title="Avg. Login per Month" value={data.avgLogins} />
      </div>

      <div className="charts-container">
      {chartTypes.map((chartType, index) => ( <div
              className={`${focusedChartIndex === index ? 'focused' : ''}`}
              key={index}
              ref={(el) => (chartsRef.current[index] = el!)} // Store the reference to the chart container
            ><ChartContainer
            key={index}
            data={usersByCompletionData}
            options={chartOptions}
            title={`Users by Completion Group ${index + 1}`}
            isFocused={focusedChartIndex === index}
            onToggleFocus={() => toggleFocus(index)}
            chartType={chartType}
          /></div>)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
