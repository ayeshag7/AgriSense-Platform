'use client';

import { useState, useEffect } from 'react';
import SignUpForm from '@/components/Authentication/SignUpForm';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function SignUpPage() {
  const images = [
    '/images/signup-image1.png',
    '/images/signup-image2.png',
    '/images/signup-image3.png',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen flex items-center justify-center py-12 bg-white">
      
      <Link href="/" className="absolute top-6 left-14 z-50 flex items-center gap-2 text-black hover:text-[#64FF64] transition-colors">
        <IconArrowLeft className="w-8 h-8" />
      </Link>

      <div className="max-w-6xl w-full flex flex-row bg-gray-100 border border-black md:rounded-xl shadow-md overflow-hidden my-8">

        {/* Left: Form Section */}
        <div className="w-full md:w-1/2 pointer-events-auto">
          <SignUpForm />
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:flex md:w-1/2 relative bg-black">
          <div className="relative w-full h-full">
            <Image
              key={index}
              src={images[index]}
              alt="Signup Illustration"
              fill
              className="object-cover transition-opacity duration-500 ease-in-out pointer-events-none"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
