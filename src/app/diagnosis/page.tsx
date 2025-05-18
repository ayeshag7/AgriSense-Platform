'use client';

import { useEffect, useState } from 'react';
import DiagnosisResults from '@/components/Diagnosis/DiagnosisResults';
import ReportOptions from '@/components/Diagnosis/ReportOptions';
import AIChatbot from '@/components/Diagnosis/AIChatbot';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function DiagnosisPage() {
  useAuthGuard(); // Protects route
  
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = sessionStorage.getItem('uploadedImage');
    setImage(storedImage);
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-50 space-y-8">
      <DiagnosisResults image={image} />
      <ReportOptions />
      <AIChatbot />
    </main>
  );
}
