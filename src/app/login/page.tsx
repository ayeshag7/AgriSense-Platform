'use client';

import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import LoginForm from '@/components/Authentication/LoginForm';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-white flex items-center justify-center py-12">
      {/* Back Arrow */}
      <Link
        href="/"
        className="absolute top-6 left-14 z-50 flex items-center gap-2 text-black hover:text-[#64FF64] transition-colors"
      >
        <IconArrowLeft className="w-8 h-8" />
      </Link>

      {/* Centered Login Form */}
      <div className="w-full max-w-2xl overflow-hidden px-12">
        <LoginForm />
      </div>
    </main>
  );
}
