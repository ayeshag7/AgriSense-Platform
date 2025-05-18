"use client";

import ChatbotWidget from "@/components/Chat/ChatbotWidget";
import { useAuthGuard } from "../../lib/useAuthGuard";

export default function ChatbotPage() {
  useAuthGuard(); // Protects route

  return (
    <main className="h-full pt-8">
        <ChatbotWidget/>
    </main>
  );
}
