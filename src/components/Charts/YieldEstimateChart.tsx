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
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function YieldEstimateChart() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme as 'light' | 'dark');
    }
  }, [resolvedTheme]);

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
          color: theme === 'dark' ? '#ffffff' : '#000000',
        },
      },
      title: {
        display: false,
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
        beginAtZero: true,
        ticks: {
          color: theme === 'dark' ? '#dddddd' : '#000000',
        },
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5',
        },
      },
      x: {
        ticks: {
          color: theme === 'dark' ? '#dddddd' : '#000000',
        },
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
