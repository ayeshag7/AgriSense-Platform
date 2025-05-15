'use client';

import { useState } from 'react';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
        />
      </div>

      {/* Right Side Dropdowns */}
      <div className="flex items-center gap-6 ml-4">
        <DropdownNotification />
        <DropdownUser />
      </div>
    </header>
  );
}
