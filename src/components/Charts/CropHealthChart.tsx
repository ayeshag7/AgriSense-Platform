'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CropHealthChart() {
  const data = {
    labels: ['Healthy', 'Leaf Blight', 'Rust', 'Other Diseases'],
    datasets: [
      {
        data: [45, 25, 15, 15],
        backgroundColor: ['#64FF64', '#000000', '#4B5563', '#9CA3AF'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#111827',
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <Doughnut data={data} options={options} />
  );
}
