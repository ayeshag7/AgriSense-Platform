'use client';

import { useState } from 'react';

export default function AccountSettings() {
  const [email, setEmail] = useState('ahmad@example.com');
  const [phone, setPhone] = useState('0300-1234567');

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Account Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#64FF64]"
            placeholder="••••••••"
          />
        </div>

        <button className="cursor-pointer px-4 py-2 mt-2 bg-black text-white rounded-md hover:bg-[#64FF64] hover:text-black transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
