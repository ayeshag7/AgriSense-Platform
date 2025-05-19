'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function DiagnosisTrendChart() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme as 'light' | 'dark');
    }
  }, [resolvedTheme]);

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
      title: { display: false },
      tooltip: {
        titleColor: theme === 'dark' ? '#ffffff' : '#111827',
        bodyColor: theme === 'dark' ? '#ffffff' : '#111827',
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        ticks: {
          color: theme === 'dark' ? '#dddddd' : '#333333',
        },
        title: {
          display: true,
          text: 'Count',
          color: theme === 'dark' ? '#aaaaaa' : '#555555',
        },
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5',
        },
      },
      x: {
        ticks: {
          color: theme === 'dark' ? '#dddddd' : '#333333',
        },
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
