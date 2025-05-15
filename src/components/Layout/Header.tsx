'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="w-full min-h-10 border-b border-none bg-black text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse max-md:mt-2 max-md:mb-6">
          <Image
            src="/images/agrisense-logo.png"
            alt="Main Logo"
            width={52}
            height={52}
            priority
          />
          <span className="self-center text-base font-bold whitespace-nowrap">
            AgriSense
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Login Button */}
          <Link
            href="/login"
            className="text-white border border-[#64FF64] bg-transparent font-medium rounded-lg text-sm px-3 py-1.5 text-center mx-2 hover:cursor-pointer"
          >
            Login
          </Link>
          {/* Get Started Button */}
          <Link
            href="/signup"
            className="text-black bg-[#64FF64] font-medium rounded-lg text-sm px-3 py-1.5 text-center hover:cursor-pointer"
          >
            Get Started
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setHidden(!hidden)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-black"
            aria-controls="navbar-sticky"
            aria-expanded={!hidden}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
