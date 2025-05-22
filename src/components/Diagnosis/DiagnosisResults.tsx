'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DiagnosisResultsProps {
  image: string | null;
  diagnosis: {
    label: string;
    confidence: number;
    severity: 'Low' | 'Moderate' | 'High';
  };
  treatment?: string | null;
}

export default function DiagnosisResults({ image, diagnosis, treatment }: DiagnosisResultsProps) {
  const [showTreatment, setShowTreatment] = useState(false);

  const severityColor =
    diagnosis.severity === 'High'
      ? 'text-red-600 dark:text-red-400'
      : diagnosis.severity === 'Moderate'
      ? 'text-yellow-500 dark:text-yellow-400'
      : 'text-green-600 dark:text-green-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black rounded-lg shadow-sm p-6 space-y-6 border border-gray-300 dark:border-gray-700 transition-colors duration-300"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-8">
        Diagnosis Results
      </h2>

      {/* Original Image */}
      {image && (
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt="Uploaded Crop"
            className="w-72 h-60 object-cover rounded-lg border border-gray-300 dark:border-gray-600 shadow"
          />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">Uploaded Crop Image</span>
        </div>
      )}

      {/* Diagnosis Info */}
      <ul className="text-base space-y-2 text-gray-700 dark:text-gray-300 mt-4">
        <li><strong>Detected Crop:</strong> Wheat</li>
        <li>
          <strong>Detected Disease:</strong>
          <span className="bg-[#64FF64] text-black font-bold rounded px-2 py-1 ml-2">
            {diagnosis.label}
          </span>
        </li>
        <li><strong>Confidence Score:</strong> {(diagnosis.confidence * 100).toFixed(1)}%</li>
        <li>
          <strong>Severity Level:</strong>{' '}
          <span className={`${severityColor} font-semibold`}>
            {diagnosis.severity}
          </span>
        </li>
      </ul>

      {/* Toggle Treatment */}
      {treatment && !showTreatment && (
        <button
          onClick={() => setShowTreatment(true)}
          className="cursor-pointer mt-6 px-5 py-2 bg-[#64FF64] text-black font-bold rounded hover:bg-[#53e653] transition"
        >
          View Suggested Treatment
        </button>
      )}

      {showTreatment && treatment && (
        <div className="mt-6 p-4 border-l-4 border-green-500 bg-green-50 dark:bg-[#1e1e1e]">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Suggested Treatment</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {treatment
              .split(/\. (?=[A-Z])/)
              .map((line, index) => (
                <li key={index}>{line.trim().replace(/\.$/, '')}.</li>
              ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
