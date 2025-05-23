'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { loginWithEmail, signInWithGoogle } from '@/lib/authentication';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await loginWithEmail(email, password);
      console.log(user)
      toast.success(`Welcome back, ${user.displayName || user.email}`);
      setTimeout(() => router.push('/dashboard'), 600);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      toast.error(`Login failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { user } = await signInWithGoogle();
      toast.success(`Logged in as ${user.displayName || user.email}`);
      setTimeout(() => router.push('/dashboard'), 600);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      toast.error(`Google sign-in failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center rounded-xl bg-black py-4 px-4">
      <div className="w-full max-w-md space-y-12 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="mt-1 text-sm text-gray-300">
            New to AgriSense?{' '}
            <Link href="/signup" className="text-[#64FF64] underline">Create an account</Link>
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-3 py-2 bg-black text-white border border-white rounded-md focus:ring-2 focus:ring-[#64FF64] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-black text-white border border-white rounded-md focus:ring-2 focus:ring-[#64FF64] focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-white"
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end text-sm">
            <Link href="/forgot-password" className="text-[#64FF64] hover:underline">Forgot your password?</Link>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="mx-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition"
          >
            <img src="/images/google-icon.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-2 px-4 bg-[#64FF64] text-black font-medium rounded-md hover:bg-[#53e653] transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
