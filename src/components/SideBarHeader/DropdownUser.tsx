'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ClickOutside from './ClickOutside';
import { logout } from '@/lib/authentication';
import { toast } from 'react-toastify';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully!');
      router.push('/login');
    } catch (error: any) {
      toast.error('Failed to log out.');
      console.error(error);
    }
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-3"
      >
        <span className="hidden lg:block text-sm font-medium text-black dark:text-white">
          Asim Raza
        </span>

        <span className="h-10 w-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
          <Image src="/images/user-profile.png" alt="User" width={40} height={40} />
        </span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-8 mt-3 w-64 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161717] shadow-lg z-50">
          <ul className="flex flex-col">
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#1e1e1e] transition"
              >
                <FaUser className="text-gray-600 dark:text-gray-300" />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#1e1e1e] transition"
              >
                <FaCog className="text-gray-600 dark:text-gray-300" />
                Account Settings
              </Link>
            </li>
          </ul>

          <button
            onClick={handleLogout}
            className="cursor-pointer flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-[#1e1e1e] transition border-t border-gray-200 dark:border-gray-700"
          >
            <FaSignOutAlt className="text-gray-600 dark:text-gray-300" />
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
