'use client';

import {
  FiFileText,
  FiActivity,
  FiBarChart2,
  FiAlertCircle,
  FiCheckCircle,
} from 'react-icons/fi';

export default function SummarySection() {
  const cardStyle =
    'flex flex-col items-start justify-center border border-[#64FF64] rounded-lg px-4 py-2.5 bg-white dark:bg-black shadow-sm space-y-2 transition-colors duration-300';

  const labelStyle =
    'flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400';

  return (
    <div className="bg-white dark:bg-black rounded-lg shadow-sm p-6 border border-gray-300 dark:border-gray-700 mb-6 transition-colors duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-8">
        Summary Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2">
        <div className={cardStyle}>
          <div className={labelStyle}>
            <FiFileText className="text-green-500 text-3xl" />
            <span>Total Reports</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">4</p>
        </div>

        <div className={cardStyle}>
          <div className={labelStyle}>
            <FiActivity className="text-green-500 text-3xl" />
            <span>Diagnosis Reports</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">2</p>
        </div>

        <div className={cardStyle}>
          <div className={labelStyle}>
            <FiBarChart2 className="text-green-500 text-3xl" />
            <span>Yield Reports</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">2</p>
        </div>

        <div className={cardStyle}>
          <div className={labelStyle}>
            <FiAlertCircle className="text-red-500 text-3xl" />
            <span>Diseased Fields</span>
          </div>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">2</p>
        </div>

        <div className={cardStyle}>
          <div className={labelStyle}>
            <FiCheckCircle className="text-green-500 text-3xl" />
            <span>Healthy Fields</span>
          </div>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">2</p>
        </div>
      </div>
    </div>
  );
}
