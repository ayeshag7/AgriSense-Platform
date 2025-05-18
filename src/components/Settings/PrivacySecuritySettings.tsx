'use client';

import { FiMonitor, FiDownload, FiTrash2 } from 'react-icons/fi';

export default function PrivacySecuritySettings() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        Privacy & Security
      </h2>

      <div className="space-y-4">
        {/* View Sessions */}
        <button className="cursor-pointer w-full text-left px-4 py-3 bg-gray-100 rounded-md hover:bg-[#64FF64] hover:text-black transition flex items-start gap-3">
          <FiMonitor className="mt-1 text-xl text-gray-600" />
          <div>
            <p className="font-medium text-gray-800">View Active Sessions</p>
            <p className="text-sm text-gray-500">Manage logged-in devices and activity history.</p>
          </div>
        </button>

        {/* Download Data */}
        <button className="cursor-pointer w-full text-left px-4 py-3 bg-gray-100 rounded-md hover:bg-[#64FF64] hover:text-black transition flex items-start gap-3">
          <FiDownload className="mt-1 text-xl text-gray-600" />
          <div>
            <p className="font-medium text-gray-800">Download My Data</p>
            <p className="text-sm text-gray-500">Export a copy of your profile and activity.</p>
          </div>
        </button>

        {/* Delete Account */}
        <button className="cursor-pointer w-full text-left px-4 py-3 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition flex items-start gap-3">
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
