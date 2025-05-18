'use client';

import Charts from "@/components/Dashboard/Charts";
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function DashboardPage() {
  useAuthGuard(); // Protects route

  return (
    <main className="min-h-screen px-10 py-8">
      <Charts />
    </main>
  );
}
