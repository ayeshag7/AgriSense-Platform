"use client";

import UploadBox from '@/components/Upload/UploadBox';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function UploadPage() {
  useAuthGuard(); // Protects route

  return (
    <main className="min-h-screen bg-gray-100 p-12">
      <UploadBox />
    </main>
  );
}
