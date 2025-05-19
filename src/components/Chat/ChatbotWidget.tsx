'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FiSend, FiPlus } from 'react-icons/fi';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const dummyReply = (msg: string) => {
  return `This is a placeholder response to: "${msg}"\n\nFurther explanation will appear here once connected to AI backend.`;
};

export default function ChatbotWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages([
      ...newMessages,
      { role: 'assistant', content: dummyReply(input) },
    ]);
    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-gray-100 dark:bg-black flex items-start justify-center px-4 py-6 transition-colors duration-300">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg flex flex-col border border-gray-300 dark:border-gray-700">
        {/* Header */}
        <div className="bg-[#d8f8d8] dark:bg-[#64FF64] border-b border-gray-400 dark:border-gray-600 text-black font-bold text-lg px-6 py-4 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-2">
            <Image
              src="/images/chatbot.png"
              alt="Chatbot Icon"
              width={32}
              height={32}
              className="object-cover"
            />
            AgriBot
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-black shadow">
            <Image
              src="/images/user-profile.png"
              alt="User"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>

        {/* Chat Body */}
        <div className="px-4 py-3 h-72 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg px-3 py-2 text-sm whitespace-pre-wrap max-w-[80%] ${
                  msg.role === 'user'
                    ? 'bg-[#64FF64] text-black'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-400 dark:border-gray-700 px-4 py-3 flex items-center gap-2 bg-white dark:bg-black rounded-b-lg transition-colors duration-300">
          {/* + Icon */}
          <div className="flex justify-center my-2">
            <button className="cursor-pointer rounded-full border border-gray-300 dark:border-gray-600 w-9 h-9 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FiPlus className="text-xl text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <input
            type="text"
            placeholder="Ask AgriBot..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#64FF64] bg-white dark:bg-[#111] text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"
          />

          <button
            onClick={sendMessage}
            className="cursor-pointer bg-black text-white rounded-full p-2 hover:bg-gray-900 transition"
          >
            <FiSend className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
