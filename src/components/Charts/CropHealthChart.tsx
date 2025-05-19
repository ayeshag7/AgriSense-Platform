'use client';

import { useTheme } from 'next-themes';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CropHealthChart() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme as 'light' | 'dark');
    }
  }, [resolvedTheme]);

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
          color: theme === 'dark' ? '#ffffff' : '#111827',
          font: { size: 12 },
        },
      },
      tooltip: {
        titleColor: theme === 'dark' ? '#ffffff' : '#111827',
        bodyColor: theme === 'dark' ? '#ffffff' : '#111827',
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        borderWidth: 1,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
