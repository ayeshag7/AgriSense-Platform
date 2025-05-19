'use client';

import Image from 'next/image';
import Link from 'next/link';

const guides = [
  { title: 'Leaf Blight Treatment', slug: 'leaf-blight', image: '/images/leaf-blight.png' },
  { title: 'Rust Control Guide', slug: 'rust-disease', image: '/images/rust-guide.png' },
  { title: 'Fungal Spray Guide', slug: 'fungal-spray', image: '/images/fungal-spray.png' },
  { title: 'Wheat Care Tips', slug: 'wheat-care', image: '/images/wheat-care.png' },
  { title: 'Rice Disease Manual', slug: 'rice-disease', image: '/images/rice-disease.png' },
  { title: 'Pest Management', slug: 'pest-management', image: '/images/pest-guide.png' },
];

export default function TreatmentGuidesRow() {
  return (
    <div className="mb-10 px-8 pt-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Treatment Guides</h2>
        <Link
          href="/treatment-guides"
          className="bg-[#64FF64] text-black px-2 py-1 rounded text-sm hover:bg-[#53e653] transition"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {guides.slice(0, 4).map((guide) => (
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
              className="rounded-md mb-2 object-cover border-2 border-l border-b border-[#64FF64] w-full h-40"
            />
            <h3 className="text-md font-semibold text-gray-800 dark:text-white">{guide.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
