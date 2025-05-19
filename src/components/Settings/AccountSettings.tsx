'use client';

import { useState } from 'react';

export default function AccountSettings() {
  const [email, setEmail] = useState('ahmad@example.com');
  const [phone, setPhone] = useState('0300-1234567');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        Account Settings
      </h2>

      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1e1e1e] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">We'll use this to contact you.</p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1e1e1e] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Enter your local mobile number.</p>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1e1e1e] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Minimum 8 characters. Leave empty to keep current password.
          </p>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="cursor-pointer px-5 py-2 mt-2 bg-black dark:bg-[#64FF64] text-white dark:text-black font-semibold rounded-md hover:bg-[#64FF64] hover:text-black transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
