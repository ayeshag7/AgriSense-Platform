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
  const downloadSingleReport = (report: typeof reports[0]) => {
    const csv = [
      ['Field', 'Date', 'Type', 'Crop', 'Disease', 'Yield', 'Status'],
      [
        report.field,
        report.date,
        report.type,
        report.crop,
        report.disease || '-',
        report.yield || '-',
        report.status,
      ],
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.field.toLowerCase().replace(/\s+/g, '-')}-report.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-800">Recent Field Reports</h2>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#d8f8d8] text-gray-800 uppercase">
            <tr>
              <th className="px-4 py-4">Field</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Type</th>
              <th className="px-4 py-4">Crop</th>
              <th className="px-4 py-4">Disease</th>
              <th className="px-4 py-4">Yield</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Download</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-4">{report.field}</td>
                <td className="px-4 py-4">{report.date}</td>
                <td className="px-4 py-4">{report.type}</td>
                <td className="px-4 py-4">{report.crop}</td>
                <td className="px-4 py-4">{report.disease || '-'}</td>
                <td className="px-4 py-4">{report.yield || '-'}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1.5 rounded text-xs font-semibold ${
                      report.status === 'Healthy'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => downloadSingleReport(report)}
                    className="cursor-pointer text-green-600 hover:text-green-800"
                    title="Download this report"
                  >
                    <FiDownload className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
