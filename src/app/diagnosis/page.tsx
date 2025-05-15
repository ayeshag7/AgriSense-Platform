'use client';

import { useEffect, useState } from 'react';
import DiagnosisResults from '@/components/Diagnosis/DiagnosisResults';
import ReportOptions from '@/components/Diagnosis/ReportOptions';
import AIChatbot from '@/components/Diagnosis/AIChatbot';

export default function DiagnosisPage() {
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
