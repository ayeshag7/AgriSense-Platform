// app/yield/page.tsx
'use client';

import YieldBox from '@/components/Yield/YieldBox';
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function YieldPage() {
  useAuthGuard(); // Protects route
  
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-[#1e1e1e] p-12">
      <YieldBox />
    </main>
  );
}
