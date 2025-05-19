'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AIChatbot from '@/components/Diagnosis/AIChatbot';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function EstimatedYieldPage() {
  useAuthGuard(); // Protects route

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = sessionStorage.getItem('constructedFieldImage');
    setImage(storedImage);
  }, []);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center bg-gray-100 dark:bg-[#1e1e1e] transition-colors duration-300">
      <div className="bg-white dark:bg-black rounded-lg shadow-sm py-10 px-8 space-y-6 border border-gray-300 dark:border-gray-700 w-full max-w-7xl transition-colors duration-300">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-10">
          Estimated Yield Report
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
          {/* Image Section */}
          {image ? (
            <div className="w-full md:w-1/2">
              <Image
                src={image}
                alt="Constructed Field"
                width={500}
                height={300}
                className="rounded-lg border border-gray-300 dark:border-gray-600 shadow-md"
              />
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No field image found.</p>
          )}

          {/* Textual Content */}
          <div className="w-full md:w-1/2 space-y-4 text-gray-800 dark:text-gray-200">
            <p className="text-lg font-semibold">
              Estimated Yield:{' '}
              <span className="text-black dark:text-black px-2 py-1 rounded-lg bg-[#64FF64] font-bold">
                13,900 kg/ha
              </span>
            </p>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              The yield estimation is generated using deep learning models trained on aerial crop datasets.
              Metrics considered include canopy coverage, NDVI signatures, vegetation health, and inter-row consistency.
              Environmental factors and image stitching integrity also influence accuracy.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 mb-10">
              <span className="font-bold text-black dark:text-white">Note:</span> Yield may vary due to weather, soil quality,
              and field variability. Use this estimation for planning, not as a replacement for ground-based measurement.
            </p>

            {/* Generate Report Button */}
            <button className="cursor-pointer px-4 py-2 border-2 border-[#64FF64] text-black dark:text-white dark:hover:text-black rounded-md hover:bg-[#64FF64] font-bold transition">
              Generate Yield Report
            </button>
          </div>
        </div>
      </div>

      {/* AI Chatbot Floating Button */}
      <AIChatbot />
    </main>
  );
}
