"use client";

import TreatmentGuidesRow from "@/components/Resources/TreatmentGuidesRow";
import EducationalVideos from "@/components/Resources/EducationalVideos";


import dynamic from 'next/dynamic';

// Dynamically import with SSR disabled
const PakistanMap = dynamic(() => import('@/components/Map/PakistanMap'), {
  ssr: false,
});

export default function ResourcesPage() {
  return (
    <main className="py-8">
        <TreatmentGuidesRow/>
        <EducationalVideos/>
        <PakistanMap />
    </main>
  );
}
