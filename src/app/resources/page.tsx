"use client";

import TreatmentGuidesRow from "@/components/Resources/TreatmentGuidesRow";
import EducationalVideos from "@/components/Resources/EducationalVideos";
import { useAuthGuard } from "../../lib/useAuthGuard";

import dynamic from 'next/dynamic';

// Dynamically import with SSR disabled
const PakistanMap = dynamic(() => import('@/components/Map/PakistanMap'), {
  ssr: false,
});

export default function ResourcesPage() {
  useAuthGuard(); // Protects route
  
  return (
    <main className="py-8 bg-gray-100 dark:bg-[#1e1e1e]">
        <TreatmentGuidesRow/>
        <EducationalVideos/>
        <PakistanMap />
    </main>
  );
}
