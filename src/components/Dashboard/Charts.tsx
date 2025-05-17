'use client';

import CropHealthChart from '../Charts/CropHealthChart';
import YieldEstimateChart from '../Charts/YieldEstimateChart';
import DiseaseFrequencyChart from '../Charts/DiseaseFrequencyChart';
import FieldWiseYieldChart from '../Charts/FieldWiseYieldChart';
import DiagnosisTrendChart from '../Charts/DiagnosisTrendChart';

export default function Charts() {
  return (
    <div className="flex flex-col gap-8 px-4">
      {/* Row 1: Two charts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg pt-6 pb-14 px-6 shadow-sm h-96">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">Crop Health Distribution</h2>

          {/* Chart wrapper to center chart only */}
          <div className="flex justify-center h-full">
            <CropHealthChart />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg pt-6 pb-14 px-6 shadow-sm h-96">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Disease Frequency Report</h2>
          <DiseaseFrequencyChart />
        </div>
      </div>

      {/* Row 2: Yield Estimate Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Monthly Yield Estimates</h2>
        <YieldEstimateChart />
      </div>

      {/* Row 3: Two charts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg pt-6 pb-20 px-6 shadow-sm h-96">
            <h2 className="text-lg font-bold text-gray-800 mb-8">Field-wise Yield Comparison</h2>
            <FieldWiseYieldChart />
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg pt-6 pb-20 px-6 shadow-sm h-96">
            <h2 className="text-lg font-bold text-gray-800 mb-8">Diagnosis Trend (Last 30 Days)</h2>
            <DiagnosisTrendChart />
        </div>
      </div>

    </div>
  );
}
