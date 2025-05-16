// components/Resources/EducationalVideos.tsx

'use client';

import Link from 'next/link';

const videos = [
  { id: 'AeuP5IYP5HA' },
  { id: 'gjMIh19zH7k' },
  { id: '69Ja2KebqWY' },
  { id: 'heEkdpCApQ4' },
  { id: 'oMu5hP4DnEQ' },
];

export default function EducationalVideos() {
  return (
    <section className="px-8 pt-8">
      {/* Browse All Button */}
      <div className="flex justify-between items-center mb-8 px-2">
        <h2 className="text-xl font-bold text-gray-800">Educational Videos</h2>
        <Link
          href="/educational-videos"
          className="text-sm text-black bg-[#64FF64] px-2 py-1 rounded transition"
        >
          Browse All
        </Link>
      </div>

      {/* Scrollable Row of 3 Videos */}
      <div className="flex overflow-x-auto space-x-6 pb-2">
        {videos.slice(0, 3).map((video) => (
          <div
            key={video.id}
            className="min-w-[400px] max-w-[440px] flex-shrink-0 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={`Video ${video.id}`}
              allowFullScreen
              className="w-full h-[260px] rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
