'use client';

import Image from 'next/image';
import { FiMail, FiUser, FiMapPin, FiLock, FiPhone } from 'react-icons/fi';

export default function ProfileOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Overview</h2>

      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#64FF64] mb-6">
          <Image
            src="/images/user-profile.png"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        {/* Profile Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl text-left">

          {/* Full Name */}
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md bg-gray-50">
            <FiUser className="text-[#64FF64] text-xl" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-base font-medium text-gray-800">Ahmad Nawaz</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md bg-gray-50">
            <FiMail className="text-[#64FF64] text-xl" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-base font-medium text-gray-800">ahmad@example.com</p>
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md bg-gray-50 col-span-1 md:col-span-2">
            <FiLock className="text-[#64FF64] text-xl" />
            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p className="text-base font-medium text-gray-800">••••••••</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md bg-gray-50 col-span-1 md:col-span-2">
            <FiPhone className="text-[#64FF64] text-xl" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-base font-medium text-gray-800">0300-1234567</p>
            </div>
          </div>

          {/* District */}
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md bg-gray-50">
            <FiMapPin className="text-[#64FF64] text-xl" />
            <div>
              <p className="text-sm text-gray-500">District</p>
              <p className="text-base font-medium text-gray-800">Multan</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-md bg-gray-50">
            <FiUser className="text-[#64FF64] text-xl" />
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-base font-medium text-gray-800">Farmer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
