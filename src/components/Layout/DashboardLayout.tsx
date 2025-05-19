'use client';

import Sidebar from '@/components/Sidebar/SideBar';
import { useState } from 'react';
import DashboardHeader from '../SideBarHeader/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-[#161717]">
          {children}
        </main>
      </div>
    </div>
  );
}
