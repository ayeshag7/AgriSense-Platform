'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { updateUserProfile } from '@/lib/profile';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import Image from 'next/image';

interface EditProfileFormProps {
  userData: {
    fullName?: string;
    email?: string;
    phone?: string;
    district?: string;
    role?: string;
    profileImage?: string;
    cnic?: string;
  };
  onSave: (updated: any) => void;
  onCancel: () => void;
}

export default function EditProfileForm({ userData, onSave, onCancel }: EditProfileFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [role, setRole] = useState('');
  const [cnic, setCnic] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(userData.fullName || '');
    setPhone(userData.phone || '');
    setEmail(userData.email || '');
    setDistrict(userData.district || '');
    setRole(userData.role || 'Farmer');
    setCnic(userData.cnic || '');
    setPreviewURL(userData.profileImage || null);
  }, [userData]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = userData.profileImage || '';
      if (profileImage) {
        imageUrl = await uploadToCloudinary(profileImage);
      }

      const updatedData = {
        fullName: name,
        email,
        phone,
        district,
        role,
        cnic,
        profileImage: imageUrl,
      };

      await updateUserProfile(updatedData);
      onSave(updatedData);
    } catch (err) {
      console.error('Failed to update profile:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black rounded-lg shadow-md py-6 px-6 md:px-24 border border-gray-300 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-4 mb-12">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputStyle} />
          </div>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyle} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">Phone</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputStyle} />
          </div>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">CNIC</label>
            <input type="text" value={cnic} onChange={(e) => setCnic(e.target.value)} className={inputStyle} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">District / City</label>
            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} className={inputStyle} />
          </div>
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className={inputStyle}>
              <option>Farmer</option>
              <option>Researcher</option>
              <option>Admin</option>
              <option>Student</option>
            </select>
          </div>
        </div>

        {/* Image Upload */}
        <div className="max-w-md">
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">Update Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-900"
          />
          {previewURL && (
            <Image
              src={previewURL}
              alt="Profile Preview"
              width={96}
              height={96}
              className="mt-4 rounded-full object-cover border border-gray-300 dark:border-gray-600"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer px-6 py-2 bg-[#64FF64] text-black font-semibold rounded-md hover:bg-[#53e653] transition disabled:opacity-60"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
          <button type="button" onClick={onCancel} className="cursor-pointer text-gray-500 hover:underline">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle =
  'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1e1e1e] text-black dark:text-white focus:ring-2 focus:ring-[#64FF64] focus:outline-none';
