'use client';

import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center rounded-xl bg-black py-4 px-4">
      <div className="w-full max-w-md space-y-12 text-white">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="mt-1 text-sm text-gray-300">
            New to AgriSense?{' '}
            <Link href="/signup" className="text-[#64FF64] underline">
              Create an account
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-3 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <Link href="/forgot-password" className="text-[#64FF64] hover:underline">
              Forgot your password?
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <img src="/images/google-icon.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#64FF64] text-black font-medium rounded-md hover:bg-[#53e653] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
