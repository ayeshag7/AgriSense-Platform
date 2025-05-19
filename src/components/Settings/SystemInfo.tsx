'use client';

import { FiInfo, FiClock, FiMapPin, FiMonitor } from 'react-icons/fi';

export default function SystemInfo() {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        System Info
      </h3>

      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
        <li className="flex items-center gap-3">
          <FiInfo className="text-gray-900 dark:text-white" />
          <span><strong>App Version:</strong> 1.0.0</span>
        </li>
        <li className="flex items-center gap-3">
          <FiClock className="text-gray-900 dark:text-white" />
          <span><strong>Last Login:</strong> May 21, 2025 – 4:00 PM</span>
        </li>
        <li className="flex items-center gap-3">
          <FiMapPin className="text-gray-900 dark:text-white" />
          <span><strong>Login Location:</strong> Multan, Pakistan</span>
        </li>
        <li className="flex items-center gap-3">
          <FiMonitor className="text-gray-900 dark:text-white" />
          <span><strong>Device:</strong> Windows 10 / Chrome</span>
        </li>
      </ul>
    </div>
  );
}
