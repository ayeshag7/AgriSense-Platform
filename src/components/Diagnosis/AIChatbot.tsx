// components/Diagnosis/AIChatbot.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AIChatbot() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/chatbot" className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#64FF64] text-black rounded-full shadow-lg hover:bg-[#53e653] transition-all">
        <Image
              src="/images/chatbot.png"
              alt="User"
              width={36}
              height={36}
              className="object-cover"
            />
        Chat with AgriBot
      </Link>
    </div>
  );
}
