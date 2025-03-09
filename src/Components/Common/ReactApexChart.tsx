import React from 'react';
import ApexCharts from 'react-apexcharts';

const ReactApexChart = ({ ...props }) => {
  if (typeof window === 'undefined') return null;
  return <ApexCharts {...props} />;
};

export default ReactApexChart;
