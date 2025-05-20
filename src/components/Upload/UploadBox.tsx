'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiUploadCloud } from 'react-icons/fi';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import { getDiagnosisFromAPI } from '@/utils/diagnosis';
import { saveCropImageMetadata } from '@/lib/firestore';
import { auth } from "@/lib/firebase";


export default function UploadBox() {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const MAX_IMAGE_SIZE_MB = 4;

  const statusTexts = [
    'Diagnosing crop image for visible disease symptoms...',
    'Analyzing leaf texture, color, and patterns using AI model...',
    'Inferring disease type and severity based on learned patterns...',
    'Finalizing report with treatment suggestions and visual overlays...',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > MAX_IMAGE_SIZE_MB) {
      setError(`Image is too large (${fileSizeMB.toFixed(2)}MB). Max allowed is ${MAX_IMAGE_SIZE_MB}MB.`);
      return;
    }

    setError('');
    if (preview) {
      setPendingFile(file);
      setShowModal(true);
    } else {
      readAndSetImage(file);
    }
  };

  const readAndSetImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      try {
        sessionStorage.removeItem('uploadedImage');
        const result = reader.result as string;
        sessionStorage.setItem('uploadedImage', result);
        setPreview(result);
      } catch (err) {
        console.error('Storage error:', err);
        setError('Failed to store image. Try a smaller one.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDiagnose = async () => {
  try {
    setLoading(true);

    const userId = auth.currentUser?.uid;
    console.log("Authenticated user:", userId);

    const file = pendingFile || (preview && await fetch(preview).then(res => res.blob()).then(blob => new File([blob], "upload.jpg"))) || null;
    if (!file) throw new Error("No file selected");

    // 1. Upload to Cloudinary
    const imageUrl = await uploadToCloudinary(file);
    console.log(imageUrl)

    // 2. Send to ML API
    const diagnosis = await getDiagnosisFromAPI(imageUrl);
    console.log(diagnosis)

    // 3. Save to Firestore
    const docId = await saveCropImageMetadata(imageUrl, diagnosis);
    console.log(docId)

    // 4. Store in session for viewing
    sessionStorage.setItem('diagnosisDocId', docId);
    sessionStorage.setItem('diagnosisData', JSON.stringify(diagnosis));
    sessionStorage.setItem('uploadedImage', imageUrl);

    router.push('/diagnosis');
  } catch (err) {
    console.error(err);
    setError("Something went wrong during diagnosis.");
    setLoading(false);
  }
};

  const confirmReplaceImage = () => {
    if (pendingFile) {
      sessionStorage.removeItem('uploadedImage');
      window.location.reload();
    }
  };

  const cancelReplaceImage = () => {
    setShowModal(false);
    setPendingFile(null);
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
    <div className="flex flex-col items-center justify-center px-6 pt-6 pb-12 relative">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Upload an Image of Your Crop</h1>

      <div className="w-full max-w-2xl bg-white dark:bg-black border border-dashed border-[#64FF64] rounded-xl p-6 text-center transition shadow-sm hover:shadow-lg group">
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
          <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-black dark:group-hover:text-white">
            Drag & Drop or Click to Upload
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            (JPG, JPEG, PNG only, Max {MAX_IMAGE_SIZE_MB}MB)
          </p>
        </label>

        {error && <p className="text-red-600 dark:text-red-400 mt-4">{error}</p>}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-6 max-w-xs max-h-64 mx-auto rounded-lg shadow-md border border-gray-300 dark:border-gray-600"
          />
        )}
      </div>

      {preview && (
        <button
          onClick={handleDiagnose}
          className="cursor-pointer mt-6 flex items-center gap-2 bg-black dark:bg-[#64FF64] text-white dark:text-black border border-[#64FF64] px-5 py-2 rounded-lg hover:bg-[#1a1a1a] dark:hover:bg-[#53e653] transition"
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 dark:bg-white/10 flex items-center justify-center z-50 transition">
          <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center border border-gray-300 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Replace Uploaded Image?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              You already uploaded an image. Do you want to replace it?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmReplaceImage}
                className="cursor-pointer px-4 py-2 bg-[#64FF64] text-black rounded hover:bg-[#53e653]"
              >
                Replace
              </button>
              <button
                onClick={cancelReplaceImage}
                className="cursor-pointer px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-[#1e1e1e] text-gray-700 dark:text-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
