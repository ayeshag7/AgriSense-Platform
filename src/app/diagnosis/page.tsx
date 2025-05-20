'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

import DiagnosisResults from '@/components/Diagnosis/DiagnosisResults';
import ReportOptions from '@/components/Diagnosis/ReportOptions';
import AIChatbot from '@/components/Diagnosis/AIChatbot';
import { useAuthGuard } from '../../lib/useAuthGuard';

export default function DiagnosisPage() {
  useAuthGuard();

  const [loading, setLoading] = useState(true);
  const [diagnosisData, setDiagnosisData] = useState<any>(null);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      const docId = sessionStorage.getItem('diagnosisDocId');
      if (!docId) return;

      const docRef = doc(db, 'cropImages', docId);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        setDiagnosisData({ id: docId, ...snapshot.data() });
      }

      setLoading(false);
    };

    fetchDiagnosis();
  }, []);

  if (loading || !diagnosisData) {
    return (
      <main className="min-h-screen p-8 bg-gray-100 dark:bg-[#1e1e1e]">
        <p className="text-center text-gray-500 dark:text-gray-300">Loading diagnosis...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-gray-100 dark:bg-[#1e1e1e] space-y-8">
      <DiagnosisResults
        image={diagnosisData.image_url}
        diagnosis={{
          label: diagnosisData.diagnosis,
          confidence: diagnosisData.confidence_score,
          severity: diagnosisData.severity_level,
        }}
      />
      <ReportOptions />
      <AIChatbot />
    </main>
  );
}
