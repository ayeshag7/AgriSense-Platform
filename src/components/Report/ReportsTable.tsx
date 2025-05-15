'use client';

import { FiDownload } from 'react-icons/fi';

const reports = [
  {
    field: 'Field A',
    date: '2025-05-12',
    type: 'Diagnosis',
    crop: 'Wheat',
    disease: 'Leaf Blight',
    yield: '',
    status: 'Diseased',
  },
  {
    field: 'Field B',
    date: '2025-05-10',
    type: 'Yield',
    crop: 'Maize',
    disease: '',
    yield: '14200 kg/ha',
    status: 'Healthy',
  },
  {
    field: 'Field C',
    date: '2025-05-08',
    type: 'Diagnosis',
    crop: 'Wheat',
    disease: 'Rust',
    yield: '',
    status: 'Diseased',
  },
  {
    field: 'Field D',
    date: '2025-05-06',
    type: 'Yield',
    crop: 'Rice',
    disease: '',
    yield: '9800 kg/ha',
    status: 'Healthy',
  },
];

export default function ReportsTable() {
  const downloadCSV = () => {
    const csv = [
      ['Field', 'Date', 'Type', 'Crop', 'Disease', 'Yield', 'Status'],
      ...reports.map(r => [
        r.field,
        r.date,
        r.type,
        r.crop,
        r.disease || '-',
        r.yield || '-',
        r.status,
      ]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'agrisense-reports.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-800">Recent Field Reports</h2>
        <button
          onClick={downloadCSV}
          className="flex items-center gap-2 px-4 py-2 border border-[#64FF64] text-black rounded-md hover:bg-[#64FF64] transition"
        >
          <FiDownload className="text-lg" />
          Download CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-[#f4fef4] text-gray-800 uppercase">
            <tr>
              <th className="px-4 py-2">Field</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Crop</th>
              <th className="px-4 py-2">Disease</th>
              <th className="px-4 py-2">Yield</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{report.field}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">{report.type}</td>
                <td className="px-4 py-2">{report.crop}</td>
                <td className="px-4 py-2">{report.disease || '-'}</td>
                <td className="px-4 py-2">{report.yield || '-'}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      report.status === 'Healthy'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
