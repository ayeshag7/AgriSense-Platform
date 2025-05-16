// components/Diagnosis/DiagnosisResults.tsx
'use client';

import { motion } from 'framer-motion';

interface DiagnosisResultsProps {
  image: string | null;
}

export default function DiagnosisResults({ image }: DiagnosisResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-sm p-6 space-y-6 border border-gray-300"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-8">Diagnosis Results</h2>

      {/* Image Comparison */}
      {image && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Original Image */}
          <div className="flex flex-col items-center">
            <img
            src={image}
            alt="Original Upload"
            className="w-72 h-60 object-cover rounded-lg border border-gray-300 shadow"
            />
            <span className="mt-2 text-sm text-gray-600">Original Image</span>
          </div>

          {/* Diagnosed Image (Mock for now) */}
          <div className="flex flex-col items-center">
            <img
                src="/images/diagnosed-image.png"
                alt="Diagnosed Output"
                className="w-72 h-60 object-cover rounded-lg border border-gray-300 shadow"
                />
            <span className="mt-2 text-sm text-gray-600">AI Analysis</span>
          </div>
        </div>
      )}

      {/* Diagnosis Info */}
      <ul className="text-base space-y-2 text-gray-700 mt-4">
        <li><strong>Detected Crop:</strong> Wheat</li>
        <li><strong>Detected Disease:</strong><span className='bg-[#64FF64] text-black font-bold rounded px-2 py-1 ml-2'>Leaf Blight</span></li>
        <li><strong>Confidence Score:</strong> 91%</li>
        <li>
          <strong>Severity Level:</strong>{' '}
          <span className="text-red-600 font-semibold">High</span>
        </li>
        <li>
          <strong>Suggested Treatment:</strong>{' '}
          Apply Mancozeb-based fungicide every 7 days.
        </li>
        <li>
          <strong>AI Notes:</strong>{' '}
          Discoloration and lesions observed in mid-leaf region.
        </li>
      </ul>
    </motion.div>
  );
}
