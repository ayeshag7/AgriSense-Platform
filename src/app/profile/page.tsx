'use client';

import { useEffect, useState } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import ProfileOverview from '@/components/Profile/ProfileOverview';
import EditProfileForm from '@/components/Profile/EditProfileForm';
import { useAuthGuard } from "../../lib/useAuthGuard";
import { fetchUserProfile } from '@/lib/profile';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function ProfilePage() {
  useAuthGuard();

  interface UserProfile {
  fullName: string;
  email: string;
  phone?: string;
  cnic?: string;
  role?: string;
  district?: string;
  profileImage?: string;
  }


  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUserProfile();
        setUserData(data);
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    };
    getData();
  }, []);

  return (
    <main className="min-h-screen px-10 pt-6 pb-12 bg-gray-100 dark:bg-[#1e1e1e]">
      <div className="flex flex-row justify-between items-center mb-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-black dark:text-white hover:text-[#64FF64] dark:hover:text-[#64FF64] transition-colors"
        >
          <IconArrowLeft className="w-8 h-8" />
        </Link>
        <DarkModeToggle />
      </div>

      <div className='flex justify-center items-center'>
        {!userData ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : editing ? (
        <EditProfileForm
          userData={userData}
          onSave={(updated) => {
            setUserData(updated);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <ProfileOverview
          userData={userData}
          onEdit={() => setEditing(true)}
        />
      )}
      </div>
    </main>
  );
}
