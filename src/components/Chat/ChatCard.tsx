'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

type Chat = {
  avatar: string;
  name: string;
  text: string;
  time: number;
  textCount: number;
  color: string;
};

const chatData: Chat[] = [
  {
    avatar: '/images/user-01.png',
    name: 'Ahmed Khan',
    text: 'Wheat yield seems low this year. Any tips?',
    time: 8,
    textCount: 2,
    color: '#10B981',
  },
  {
    avatar: '/images/user-02.png',
    name: 'Fatima Bibi',
    text: 'How to control pests in sugarcane fields?',
    time: 15,
    textCount: 0,
    color: '#DC3545',
  },
  {
    avatar: '/images/user-03.png',
    name: 'Ali Raza',
    text: 'Irrigation schedule for cotton?',
    time: 22,
    textCount: 1,
    color: '#FFBA00',
  },
  {
    avatar: '/images/user-04.png',
    name: 'Zainab Malik',
    text: 'Using solar pumps for water — any reviews?',
    time: 30,
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: '/images/user-05.png',
    name: 'Usman Tariq',
    text: 'Fertilizer recommendations for rice?',
    time: 35,
    textCount: 3,
    color: '#DC3545',
  },
  {
    avatar: '/images/user-01.png',
    name: 'Nida Aslam',
    text: 'What’s the best time to sow sunflower in Punjab?',
    time: 42,
    textCount: 0,
    color: '#FFBA00',
  },
];

const ChatCard: FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-gray-200 bg-white py-6 shadow-md xl:col-span-4">
      <h4 className="mb-6 px-8 text-xl font-semibold text-gray-900">
        Farmer Chats
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            key={key}
            className="flex items-center gap-5 py-3 px-8 hover:bg-gray-100 transition-colors"
          >
            <div className="relative h-14 w-14 rounded-full overflow-hidden">
              <Image
                src={chat.avatar}
                alt={chat.name}
                fill
                className="object-cover"
              />
              <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: chat.color }}
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-gray-900">{chat.name}</h5>
                <p>
                  <span className="text-sm text-gray-800">{chat.text}</span>
                  <span className="text-xs text-gray-500"> · {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600">
                  <span className="text-sm font-medium text-white">
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
