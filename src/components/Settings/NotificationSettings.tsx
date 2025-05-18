export default function NotificationSettings() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h3>
      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked className="accent-[#64FF64] w-5 h-5" />
          <span className="text-gray-700 text-sm">Email Notifications</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="accent-[#64FF64] w-5 h-5" />
          <span className="text-gray-700 text-sm">SMS/Push Alerts</span>
        </label>
      </div>
    </div>
  );
}
