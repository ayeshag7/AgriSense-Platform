'use client';

import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import AccountSettings from '@/components/Settings/AccountSettings';
import NotificationSettings from '@/components/Settings/NotificationSettings';
import PrivacySecuritySettings from '@/components/Settings/PrivacySecuritySettings';
import SystemInfo from '@/components/Settings/SystemInfo';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function SettingsPage() {
  useAuthGuard(); // Protects route
  
  return (
    <main className="min-h-screen px-10 py-12 space-y-10">
      {/* Back Arrow */}
      <Link
        href="/dashboard"
        className="absolute top-6 left-8 z-50 flex items-center gap-2 text-black hover:text-[#64FF64] transition-colors"
      >
        <IconArrowLeft className="w-8 h-8" />
      </Link>

      <h1 className="text-2xl font-bold text-gray-800 mb-8 mt-6">Settings</h1>

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
