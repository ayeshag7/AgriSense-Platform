'use client';

import { FiMail, FiBell } from 'react-icons/fi';

export default function NotificationSettings() {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Notification Preferences</h3>

      <div className="space-y-4">
        {/* Email Notifications */}
        <label className="flex items-center gap-4 cursor-pointer group hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-3 rounded-md transition">
          <input type="checkbox" defaultChecked className="accent-[#64FF64] w-5 h-5" />
          <FiMail className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-[#64FF64]" />
          <div>
            <p className="text-gray-800 dark:text-gray-100 font-medium">Email Notifications</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates and alerts via email.</p>
          </div>
        </label>

        {/* SMS / Push Notifications */}
        <label className="flex items-center gap-4 cursor-pointer group hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-3 rounded-md transition">
          <input type="checkbox" className="accent-[#64FF64] w-5 h-5" />
          <FiBell className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-[#64FF64]" />
          <div>
            <p className="text-gray-800 dark:text-gray-100 font-medium">SMS / Push Alerts</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Receive alerts directly on your phone.</p>
          </div>
        </label>
      </div>
    </div>
  );
}
