'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function FieldWiseYieldChart() {
  const data = {
    labels: ['Field A', 'Field B', 'Field C'],
    datasets: [
      {
        label: 'Yield (kg/ha)',
        data: [13900, 9400, 14100],
        backgroundColor: ['#64FF64', '#000000', '#64FF64'],
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Field-wise Yield Comparison',
        color: '#1a1a1a',
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        ticks: { color: '#333' },
        title: { display: true, text: 'Yield (kg/ha)', color: '#555' },
      },
      x: {
        ticks: { color: '#333' },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
}
