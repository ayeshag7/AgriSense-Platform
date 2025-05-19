'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClickOutside from './ClickOutside';

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div>
        <button
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:text-[#64FF64] transition"
        >
          {/* Ping Indicator */}
          <span
            className={`absolute -top-1 right-0 z-10 h-2 w-2 rounded-full bg-[#64FF64] ${
              notifying ? 'inline' : 'hidden'
            }`}
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#64FF64] opacity-75" />
          </span>

          {/* Bell Icon */}
          <svg
            className="fill-current text-black dark:text-white"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path d="M16.2 14.93L15.64 14.06C15.52 13.89 15.47 13.72 15.47 13.53V7.68C15.47 6.02 14.77 4.47 13.47 3.32C12.43 2.39 11.08 1.8 9.65 1.69V1.12C9.65 0.79 9.37 0.48 9 0.48C8.66 0.48 8.35 0.76 8.35 1.12V1.66C5.09 2.05 2.47 4.67 2.47 7.79V13.53C2.45 13.81 2.39 13.95 2.33 14.03L1.8 14.93C1.63 15.22 1.63 15.55 1.8 15.83C1.97 16.09 2.25 16.26 2.56 16.26H8.38V16.87C8.38 17.21 8.66 17.52 9.03 17.52C9.37 17.52 9.67 17.24 9.67 16.87V16.26H15.47C15.78 16.26 16.06 16.09 16.23 15.83C16.4 15.55 16.4 15.22 16.2 14.93Z" />
          </svg>
        </button>

        {/* Dropdown Panel */}
        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-80 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow-lg z-50 transition-colors duration-300">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h5 className="text-sm font-semibold text-gray-800 dark:text-white">
                Notifications
              </h5>
            </div>

            <ul className="max-h-80 overflow-y-auto">
              {[
                {
                  title: 'New Diagnosis Report Ready',
                  body: 'Leaf Blight detected with 91% confidence.',
                  date: '12 May, 2025',
                },
                {
                  title: 'Yield Estimation Completed',
                  body: 'Estimated yield for Field A: 14,200 kg/ha.',
                  date: '09 May, 2025',
                },
                {
                  title: 'Timeline Update Available',
                  body: 'Day 7 added to Field B — severity decreased.',
                  date: '06 May, 2025',
                },
                {
                  title: 'Treatment Reminder',
                  body: 'Apply treatment for Rust disease in Field C.',
                  date: '04 May, 2025',
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="flex flex-col gap-1 px-4 py-3 border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#1e1e1e] transition"
                  >
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {item.body}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {item.date}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DropdownNotification;
