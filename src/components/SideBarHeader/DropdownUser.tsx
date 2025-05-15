'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ClickOutside from './ClickOutside';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-3"
      >
        <span className="hidden lg:block text-sm font-medium text-black">
          Asim Raza
        </span>

        <span className="h-10 w-10 rounded-full overflow-hidden border border-gray-300">
          <Image src="/images/user-profile.png" alt="User" width={40} height={40} />
        </span>
      </button>

      {/* Dropdown Panel */}
      {dropdownOpen && (
        <div className="absolute right-0 top-8 mt-3 w-64 rounded-md border border-gray-200 bg-white shadow-lg z-50">

          {/* Links */}
          <ul className="flex flex-col">
            {[
              { href: '/profile', label: 'My Profile' },
              { href: '#', label: 'My Contacts' },
              { href: '/settings', label: 'Account Settings' },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button
            className="w-full text-left px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition border-t border-gray-200"
          >
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
