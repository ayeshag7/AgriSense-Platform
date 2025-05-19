'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons-react';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

const guides = [
  {
    title: 'Leaf Blight Treatment',
    slug: 'leaf-blight',
    image: '/images/leaf-blight.png',
    description: 'Necrotic lesions caused by fungal infection on wheat leaves.',
  },
  {
    title: 'Rust Control Guide',
    slug: 'rust-disease',
    image: '/images/rust-guide.png',
    description: 'Pustule-based fungal disease leading to yield reduction.',
  },
  {
    title: 'Fungal Spray Guide',
    slug: 'fungal-spray',
    image: '/images/fungal-spray.png',
    description: 'Recommended fungicides for broad-spectrum crop protection.',
  },
  {
    title: 'Wheat Care Tips',
    slug: 'wheat-care',
    image: '/images/wheat-care.png',
    description: 'Best agronomic practices to boost wheat resilience.',
  },
  {
    title: 'Rice Disease Manual',
    slug: 'rice-disease',
    image: '/images/rice-disease.png',
    description: 'Common biotic stresses in paddy fields and control methods.',
  },
  {
    title: 'Pest Management',
    slug: 'pest-management',
    image: '/images/pest-guide.png',
    description: 'Integrated pest strategies to prevent crop loss.',
  },
];

export default function TreatmentGuidesPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-[#1e1e1e] px-12 pt-8 pb-12 relative">

      <div className='flex flex-row justify-between items-center mb-8'>
        {/* Back Arrow */}
        <Link
            href="/resources"
            className="flex items-center gap-2 text-black dark:text-white hover:text-[#64FF64] dark:hover:text-[#64FF64] transition-colors"
          >
            <IconArrowLeft className="w-8 h-8" />
        </Link>

        {/* Theme Toggle */}
        <DarkModeToggle/>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 mt-6">All Treatment Guides</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/treatment-guides/${guide.slug}`}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition p-4"
          >
            <Image
              src={guide.image}
              alt={guide.title}
              width={300}
              height={200}
              className="rounded-md border-l border-b border-2 border-[#64FF64] mb-3 object-cover w-full h-56"
            />
            <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-1">
              {guide.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
