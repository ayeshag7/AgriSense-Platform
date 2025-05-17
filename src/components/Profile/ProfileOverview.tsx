'use client';

import Image from 'next/image';
import { FiMail, FiUser, FiMapPin, FiLock } from 'react-icons/fi';

export default function ProfileOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Profile Overview</h2>

      <div className="flex flex-col items-center text-center">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#64FF64] mb-4">
          <Image
            src="/images/user-profile.png"
            alt="Profile"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>

        <div className="space-y-2 mt-6 text-base text-gray-700 w-full max-w-xs text-left">
          <div className="flex items-center gap-2">
            <FiUser className="text-[#64FF64]" />
            <span className="font-medium text-gray-800">Full Name:</span> Ahmad Nawaz
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-[#64FF64]" />
            <span className="font-medium text-gray-800">Email:</span> ahmad@example.com
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-[#64FF64]" />
            <span className="font-medium text-gray-800">District:</span> Multan
          </div>
          <div className="flex items-center gap-2">
            <FiUser className="text-[#64FF64]" />
            <span className="font-medium text-gray-800">Role:</span> Farmer
          </div>
          <div className="flex items-center gap-2">
            <FiLock className="text-[#64FF64]" />
            <span className="font-medium text-gray-800">Password:</span> ••••••••
          </div>
        </div>
      </div>
    </div>
  );
}
