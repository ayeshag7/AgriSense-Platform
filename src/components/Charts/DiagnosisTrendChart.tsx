'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Filler, Legend);

export default function DiagnosisTrendChart() {
  const data = {
    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Today'],
    datasets: [
      {
        label: 'Diagnoses',
        data: [1, 3, 5, 4, 7, 6, 10],
        fill: true,
        backgroundColor: 'rgba(100, 255, 100, 0.2)',
        borderColor: '#64FF64',
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: { color: '#333' },
        title: { display: true, text: 'Count', color: '#555' },
      },
      x: {
        ticks: { color: '#333' },
      },
    },
  };

  return <Line data={data} options={options} />;
}
