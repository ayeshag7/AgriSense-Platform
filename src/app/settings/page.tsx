'use client';

import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import AccountSettings from '@/components/Settings/AccountSettings';
import NotificationSettings from '@/components/Settings/NotificationSettings';
import PrivacySecuritySettings from '@/components/Settings/PrivacySecuritySettings';
import SystemInfo from '@/components/Settings/SystemInfo';
import { useAuthGuard } from "../../lib/useAuthGuard";
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function SettingsPage() {
  useAuthGuard(); // Protects route
  
  return (
    <main className="min-h-screen px-10 pt-6 pb-12 bg-gray-100 dark:bg-[#1e1e1e] space-y-10">
      <div className='flex flex-row justify-between items-center mb-4'>
        {/* Back Arrow */}
        <Link
            href="/dashboard"
            className="flex items-center gap-2 text-black dark:text-white hover:text-[#64FF64] dark:hover:text-[#64FF64] transition-colors"
          >
            <IconArrowLeft className="w-8 h-8" />
        </Link>

        {/* Theme Toggle */}
        <DarkModeToggle/>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 mt-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NotificationSettings />
        <SystemInfo />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AccountSettings />
        <PrivacySecuritySettings />
      </div>
    </main>
  );
}
