import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherGraph = ({ data }) => {
  const graphData = {
    labels: data.map(item => (parseInt(item.time))), // x-axis labels (times)
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temp), // y-axis data (temperatures)
        fill: false,
        backgroundColor: '#191626',
        borderColor: "white",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={graphData} options={options} style={{backgroundColor:"#191626"}} />;
};

export default WeatherGraph;
