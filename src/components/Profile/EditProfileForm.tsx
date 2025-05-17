'use client';

import { useState } from 'react';

export default function EditProfileForm() {
  const [name, setName] = useState('Ahmad Nawaz');
  const [phone, setPhone] = useState('0300-1234567');
  const [email, setEmail] = useState('ahmad@example.com');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Edit Profile</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-[#64FF64] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-[#64FF64] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-[#64FF64] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Update Profile Image</label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:border file:border-gray-300 file:rounded-md file:bg-white file:text-sm file:font-medium hover:file:bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-[#64FF64] text-black font-bold rounded-md hover:bg-gray-900 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
