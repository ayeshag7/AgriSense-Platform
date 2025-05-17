'use client';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function DiseaseFrequencyChart() {
  const data = {
    labels: ['Leaf Blight', 'Rust', 'Powdery Mildew', 'Root Rot', 'Bacterial Wilt'],
    datasets: [
      {
        label: 'Disease Reports',
        data: [12, 8, 5, 3, 6],
        backgroundColor: '#64FF64',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: '#53e653',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      x: {
        ticks: { color: '#000' },
        grid: { color: '#e5e5e5' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#000' },
        grid: { color: '#e5e5e5' },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
