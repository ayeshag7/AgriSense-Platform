'use client';

import SummarySection from '@/components/Report/SummarySection';
import ReportsTable from '@/components/Report/ReportsTable';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function ReportsPage() {
  useAuthGuard(); // Protects route
  
  return (
    <main className="min-h-screen pt-8 pb-12 px-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Reports</h1>
      <SummarySection />
      <ReportsTable />
    </main>
  );
}
