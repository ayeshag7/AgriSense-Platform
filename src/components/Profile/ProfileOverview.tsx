'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiMail, FiUser, FiMapPin, FiLock, FiPhone } from 'react-icons/fi';
import { logout } from '@/lib/authentication'; // ✅ import logout function

interface ProfileOverviewProps {
  userData: {
    fullName?: string;
    email?: string;
    phone?: string;
    district?: string;
    role?: string;
    profileImage?: string;
  };
  onEdit: () => void;
}

export default function ProfileOverview({ userData, onEdit }: ProfileOverviewProps) {
  const {
    fullName,
    email,
    phone,
    district,
    role,
    profileImage,
  } = userData;

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/'); // Redirect to home or login
    } catch (err) {
      console.error('Logout error:', err);
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <div className="bg-white dark:bg-black rounded-lg shadow-md py-6 px-6 md:px-20 border border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-4 mb-8">Profile Overview</h2>

      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#64FF64] mb-6">
          <Image
            src={profileImage || "/images/user-profile.png"}
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl text-left">
          {fullName && <InfoRow icon={<FiUser />} label="Full Name" value={fullName} />}
          {email && <InfoRow icon={<FiMail />} label="Email" value={email} />}
          <InfoRow icon={<FiLock />} label="Password" value="••••••••" fullWidth />
          {phone && <InfoRow icon={<FiPhone />} label="Phone" value={phone} fullWidth />}
          {district && <InfoRow icon={<FiMapPin />} label="District" value={district} />}
          {role && <InfoRow icon={<FiUser />} label="Role" value={role} />}
        </div>

        <div className="mt-10 flex gap-4">
          <button
            onClick={onEdit}
            className="cursor-pointer px-5 py-2 bg-[#64FF64] text-black font-medium rounded hover:bg-[#53e653] transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="cursor-pointer px-5 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  fullWidth = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 border border-gray-200 dark:border-gray-600 px-4 py-2 rounded-md bg-gray-50 dark:bg-[#2a2a2a] ${
        fullWidth ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      <div className="text-[#64FF64] text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-base font-medium text-gray-800 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}
