// app/educational-videos/page.tsx

'use client';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

const videos = [
  { id: 'AeuP5IYP5HA' },
  { id: 'gjMIh19zH7k' },
  { id: '69Ja2KebqWY' },
  { id: 'heEkdpCApQ4' },
  { id: 'oMu5hP4DnEQ' },
];

export default function EducationalVideosPage() {
  return (
    <main className="min-h-screen px-12 pt-16 pb-20 relative">

      {/* Back Arrow */}
      <Link
        href="/resources"
        className="absolute top-6 left-10 flex items-center gap-2 text-black hover:text-[#64FF64] transition-colors"
      >
        <IconArrowLeft className="w-8 h-8" />
      </Link>

      <h1 className="text-2xl font-bold text-gray-800 mb-8 mt-6">All Educational Videos</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full border border-gray-300 rounded-lg shadow-md bg-white"
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
    </main>
  );
}
