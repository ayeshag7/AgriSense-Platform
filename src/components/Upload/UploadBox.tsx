'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiUploadCloud } from 'react-icons/fi';

export default function UploadBox() {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const router = useRouter();

  const statusTexts = [
    'Diagnosing crop image for visible disease symptoms...',
    'Analyzing leaf texture, color, and patterns using AI model...',
    'Inferring disease type and severity based on learned patterns...',
    'Finalizing report with treatment suggestions and visual overlays...',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        // Store in sessionStorage to access on diagnosis page
        sessionStorage.setItem('uploadedImage', result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleDiagnose = () => {
    setLoading(true);

    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusTexts.length);
    }, 3000);

    setTimeout(() => {
      clearInterval(interval);
      router.push('/diagnosis');
    }, 12000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-100 rounded-xl px-6 py-6 text-center">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-[#64FF64] mb-4" />
        <p className="text-lg font-semibold text-gray-800">
          {statusTexts[statusIndex]}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 pt-6 pb-12">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-8">Upload an Image of Your Crop</h1>

      <div className="w-full max-w-2xl bg-white border border-dashed border-[#64FF64] rounded-xl p-6 text-center transition shadow-sm hover:shadow-lg group">
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          id="file-upload"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center justify-center space-y-4"
        >
          <FiUploadCloud className="text-5xl text-[#64FF64] group-hover:scale-110 transition-transform" />
          <p className="text-gray-800 font-medium group-hover:text-black">
            Drag & Drop or Click to Upload
          </p>
          <p className="text-sm text-gray-500">(JPG, JPEG, PNG only)</p>
        </label>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-6 max-w-xs max-h-64 mx-auto rounded-lg shadow-md border border-gray-300"
          />
        )}
      </div>

      {preview && (
        <button
          onClick={handleDiagnose}
          className="cursor-pointer mt-6 flex items-center gap-2 bg-black text-white border border-[#64FF64] px-5 py-2 rounded-lg hover:bg-[#1a1a1a] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          Diagnose
        </button>
      )}
    </div>
  );
}
