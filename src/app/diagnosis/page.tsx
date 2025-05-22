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

  interface DiagnosisData {
  id: string;
  image_url: string;
  diagnosis: string;
  confidence_score: number;
  severity_level: 'Low' | 'Moderate' | 'High';
}
  const [diagnosisData, setDiagnosisData] = useState<DiagnosisData | null>(null);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      const docId = sessionStorage.getItem('diagnosisDocId');
      if (!docId) return;

      const docRef = doc(db, 'cropImages', docId);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data() as Omit<DiagnosisData, 'id'>;
        setDiagnosisData({ id: docId, ...data });
      }

      setLoading(false);
    };

    fetchDiagnosis();
  }, []);

  const [shortTreatment, setShortTreatment] = useState<string | null>(null);
  const [detailedTreatment, setDetailedTreatment] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      const docId = sessionStorage.getItem('diagnosisDocId');
      if (!docId) return;

      const docRef = doc(db, 'cropImages', docId);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const rawData = snapshot.data() as Omit<DiagnosisData, 'id'>;
        const data: DiagnosisData = { id: docId, ...rawData };
        setDiagnosisData(data);

        // Fetch treatment from Groq API
        const treatmentRes = await fetch('/api/treatment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            disease: data.diagnosis,
            severity: data.severity_level,
          }),
        });

        const treatmentJson = await treatmentRes.json();
        console.log('Groq treatment response:', treatmentJson);

        setShortTreatment(treatmentJson.shortTreatment || null);
        setDetailedTreatment(treatmentJson.detailedTreatment || null);
      }

      setLoading(false);
    };

    fetchDiagnosis();
  }, []);  

  if (loading || !diagnosisData) {
    return (
      <main className="min-h-screen p-16 bg-gray-100 dark:bg-[#1e1e1e]">
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
        treatment={shortTreatment}
      />
      <ReportOptions
          image={diagnosisData.image_url}
          disease={diagnosisData.diagnosis}
          confidence={diagnosisData.confidence_score}
          severity={diagnosisData.severity_level}
          treatment={detailedTreatment}
        />

      <AIChatbot />
    </main>
  );
}
