'use client';

export default function PrivacySecuritySettings() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Privacy & Security</h2>

      <div className="space-y-4">
        <button className="cursor-pointer w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-[#64FF64] transition">
          View Active Sessions
        </button>
        <button className="cursor-pointer w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-[#64FF64] transition">
          Download My Data
        </button>
        <button className="cursor-pointer w-full text-left px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition">
          Delete My Account
        </button>
      </div>
    </div>
  );
}
