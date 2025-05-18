'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

export default function EditProfileForm() {
  const [name, setName] = useState('Ahmad Nawaz');
  const [phone, setPhone] = useState('0300-1234567');
  const [email, setEmail] = useState('ahmad@example.com');
  const [district, setDistrict] = useState('Multan');
  const [role, setRole] = useState('Farmer');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, email, district, role, profileImage });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
          />
        </div>

        {/* Row 3: District + Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">District / City</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
            >
              <option>Farmer</option>
              <option>Researcher</option>
              <option>Admin</option>
              <option>Student</option>
            </select>
          </div>
        </div>

        {/* Profile Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Update Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-md file:border file:border-gray-300 
              file:text-sm file:font-semibold 
              file:bg-black file:text-white 
              hover:file:bg-gray-900"
          />

          {previewURL && (
            <img
              src={previewURL}
              alt="Profile Preview"
              className="mt-4 w-24 h-24 rounded-full object-cover border border-gray-300"
            />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-[#64FF64] text-black font-semibold rounded-md hover:bg-[#53e653] transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
