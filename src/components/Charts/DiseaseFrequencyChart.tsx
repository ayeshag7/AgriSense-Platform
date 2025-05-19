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
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function DiseaseFrequencyChart() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme as 'light' | 'dark');
    }
  }, [resolvedTheme]);

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
          color: theme === 'dark' ? '#ffffff' : '#000000',
        },
      },
      tooltip: {
        titleColor: theme === 'dark' ? '#ffffff' : '#111827',
        bodyColor: theme === 'dark' ? '#ffffff' : '#111827',
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        borderWidth: 1,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme === 'dark' ? '#dddddd' : '#000000',
        },
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: theme === 'dark' ? '#dddddd' : '#000000',
        },
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
