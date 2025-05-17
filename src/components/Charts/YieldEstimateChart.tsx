'use client';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function YieldEstimateChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Wheat',
        data: [9000, 11000, 12500, 13000, 14000, 13500],
        borderColor: '#64FF64',
        backgroundColor: 'rgba(100, 255, 100, 0.2)',
        tension: 0.4,
        pointBorderColor: '#64FF64',
        pointBackgroundColor: '#64FF64',
      },
      {
        label: 'Rice',
        data: [8000, 9500, 10000, 11000, 12000, 12500],
        borderColor: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        tension: 0.4,
        pointBorderColor: 'black',
        pointBackgroundColor: 'black',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#000',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#000',
        },
      },
      x: {
        ticks: {
          color: '#000',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
