// components/Diagnosis/AIChatbot.tsx
'use client';

import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

export default function AIChatbot() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#64FF64] text-black rounded-full shadow-lg hover:bg-[#53e653] transition-all">
        <HiOutlineChatBubbleLeftRight className="text-lg" />
        Chat with AgriBot
      </button>
    </div>
  );
}
