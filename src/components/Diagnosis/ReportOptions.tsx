'use client';

import { motion } from 'framer-motion';

export default function ReportOptions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-lg shadow-sm p-6 mt-6 border border-gray-300"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-8">Save or Share This Diagnosis</h2>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Highlighted Download Button */}
        <button className="cursor-pointer flex-1 px-4 py-2 border-2 border-[#64FF64] text-black rounded-md hover:bg-[#64FF64] font-semibold transition">
          Download PDF Report
        </button>

        {/* Secondary Buttons */}
        <button className="cursor-pointer flex-1 px-4 py-2 border border-gray-400 text-black rounded-md hover:bg-gray-100 transition">
          Copy Timeline QR Link
        </button>
        <button className="cursor-pointer flex-1 px-4 py-2 border border-gray-400 text-black rounded-md hover:bg-gray-100 transition">
          Save to History
        </button>
      </div>
    </motion.div>
  );
}
