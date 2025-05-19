'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded border border-gray-400 dark:border-gray-700 text-black dark:text-[#64FF64] transition-colors duration-300"
    >
      {theme === 'dark' ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
    </button>
  );
};

export default DarkModeToggle;
