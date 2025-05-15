'use client';

import Link from 'next/link';

export default function SignUpForm() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black py-12 px-4">
      <div className="w-full max-w-md space-y-16 text-white">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create your Account</h1>
          <p className="mt-1 text-sm text-gray-300">
            Already have an account?{' '}
            <Link href="/login" className="text-[#64FF64] underline">
              Login here
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Email & Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Your email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-3 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Ayesha Khan"
                className="w-full px-3 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-black text-white border border-white rounded-md shadow-sm focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-12 border border-white rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <img src="/images/google-icon.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          {/* Terms */}
          <div className="space-y-4 mt-4 text-sm text-gray-300">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span>
                By signing up, you agree to AgriSense’s{' '}
                <Link href="#" className="text-[#64FF64] hover:underline">Terms of Use</Link>{' '}
                and{' '}
                <Link href="#" className="text-[#64FF64] hover:underline">Privacy Policy</Link>.
              </span>
            </label>

            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email me about product updates and tips.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#64FF64] text-black font-medium rounded-md hover:bg-[#53e653] transition"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}
