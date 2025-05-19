'use client';

import { FiMonitor, FiDownload, FiTrash2 } from 'react-icons/fi';

export default function PrivacySecuritySettings() {
  return (
    <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        Privacy & Security
      </h2>

      <div className="space-y-4">
        {/* View Sessions */}
        <button className="cursor-pointer w-full text-left px-4 py-3 bg-gray-100 dark:bg-[#1e1e1e] rounded-md hover:bg-[#64FF64] hover:text-black transition flex items-start gap-3">
          <FiMonitor className="mt-1 text-xl text-gray-600 dark:text-gray-300 group-hover:text-black" />
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-100">View Active Sessions</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage logged-in devices and activity history.</p>
          </div>
        </button>

        {/* Download Data */}
        <button className="cursor-pointer w-full text-left px-4 py-3 bg-gray-100 dark:bg-[#1e1e1e] rounded-md hover:bg-[#64FF64] hover:text-black transition flex items-start gap-3">
          <FiDownload className="mt-1 text-xl text-gray-600 dark:text-gray-300 group-hover:text-black" />
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-100">Download My Data</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Export a copy of your profile and activity.</p>
          </div>
        </button>

        {/* Delete Account */}
        <button className="cursor-pointer w-full text-left px-4 py-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md hover:bg-red-200 dark:hover:bg-red-200 dark:hover:text-red-900 transition flex items-start gap-3">
          <FiTrash2 className="mt-1 text-xl" />
          <div>
            <p className="font-medium">Delete My Account</p>
            <p className="text-sm">Permanently remove your account and all data.</p>
          </div>
        </button>
      </div>
    </div>
  );
}
