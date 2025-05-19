'use client';

import { useState } from 'react';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import DarkModeToggle from '../ui/DarkModeToggle';

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      {/* Search Bar */}
      <div className="flex-1 max-w-md relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.9 12.9z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#161717] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
        />
      </div>

      {/* Right Side Dropdowns */}
      <div className="flex items-center gap-6 ml-4">
        <DarkModeToggle />
        <DropdownNotification />
        <DropdownUser />
      </div>
    </header>
  );
}
