'use client';

import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import ProfileOverview from '@/components/Profile/ProfileOverview';
import EditProfileForm from '@/components/Profile/EditProfileForm';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function ProfilePage() {
  useAuthGuard(); // Protects route
  
  return (
    <main className="min-h-screen px-10 py-12 bg-gray-100">
      {/* Back Arrow */}
      <Link
        href="/dashboard"
        className="absolute top-6 left-8 z-50 flex items-center gap-2 text-black hover:text-[#64FF64] transition-colors"
      >
        <IconArrowLeft className="w-8 h-8" />
      </Link>

      <h1 className="text-2xl font-bold text-gray-800 mb-8 mt-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileOverview />
        <EditProfileForm />
      </div>
    </main>
  );
}
