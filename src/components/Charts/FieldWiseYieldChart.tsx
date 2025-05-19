'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme as 'light' | 'dark');
    }
  }, [resolvedTheme]);

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
      legend: {
        display: false,
        labels: {
          color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
        },
      },
      title: {
        display: false,
        text: 'Field-wise Yield Comparison',
        color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
        font: { size: 18 },
      },
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
          text: 'Yield (kg/ha)',
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

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
}
