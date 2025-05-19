'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiUploadCloud } from 'react-icons/fi';

export default function YieldBox() {
  const [images, setImages] = useState<string[]>([]);
  const [showFieldImage, setShowFieldImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const router = useRouter();

  const statusTexts = [
    'Analyzing field patterns from uploaded images...',
    'Stitching images to construct full field view...',
    'Running AI-based crop density analysis...',
    'Calculating estimated yield in kg/ha...',
  ];

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newPreviews]);
      setShowFieldImage(false);
    }
  };

  const handleEstimateYield = () => {
    sessionStorage.setItem('constructedFieldImage', '/images/field-image.png');
    setLoading(true);

    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusTexts.length);
    }, 3000);

    setTimeout(() => {
      clearInterval(interval);
      router.push('/estimate-yield');
    }, 12000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-100 dark:bg-[#1e1e1e] rounded-xl px-6 py-6 text-center transition-colors duration-300">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-[#64FF64] mb-4" />
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {statusTexts[statusIndex]}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 pt-6 pb-12">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
        Upload Field Images for Yield Estimation
      </h1>

      <div className="w-full max-w-2xl bg-white dark:bg-black border border-dashed border-[#64FF64] rounded-xl p-6 text-center transition shadow-sm hover:shadow-lg group">
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          id="yield-upload"
          multiple
          onChange={handleFilesChange}
          className="hidden"
        />
        <label
          htmlFor="yield-upload"
          className="cursor-pointer flex flex-col items-center justify-center space-y-4"
        >
          <FiUploadCloud className="text-5xl text-[#64FF64] group-hover:scale-110 transition-transform" />
          <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-black dark:group-hover:text-white">
            Drag & Drop or Click to Upload Field Images
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">(Multiple JPG, JPEG, PNG)</p>
        </label>

        {images.length > 0 && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index + 1}`}
                className="rounded-lg h-32 w-full object-cover border border-gray-300 dark:border-gray-600 shadow-sm"
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 0 && !showFieldImage && (
        <button
          onClick={() => setShowFieldImage(true)}
          className="cursor-pointer mt-6 px-5 py-2 bg-black dark:bg-[#64FF64] text-white dark:text-black border border-[#64FF64] rounded-lg hover:bg-[#1a1a1a] dark:hover:bg-[#53e653] transition"
        >
          Show Constructed Field Image
        </button>
      )}

      {showFieldImage && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <Image
            src="/images/field-image.png"
            alt="Constructed Field"
            width={600}
            height={300}
            className="rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
          />
          <button
            onClick={handleEstimateYield}
            className="cursor-pointer mt-4 px-5 py-2 bg-[#64FF64] text-black rounded-lg hover:bg-[#53e653] transition"
          >
            Estimate Yield
          </button>
        </div>
      )}
    </div>
  );
}
