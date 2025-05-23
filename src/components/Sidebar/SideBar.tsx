'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const storedSidebarExpanded = typeof window !== 'undefined' ? localStorage.getItem('sidebar-expanded') : null;
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  console.log(setSidebarExpanded)

  // Close sidebar on outside click
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(e.target as Node) || trigger.current.contains(e.target as Node))
        return;
      setSidebarOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen]);

  // Close sidebar on ESC
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== 'Escape') return;
      setSidebarOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen]);

  // Save expansion state and toggle class
  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    const body = document.querySelector('body');
    if (!body) return;
    if (sidebarExpanded) {
        body.classList.add('sidebar-expanded');
      } else {
        body.classList.remove('sidebar-expanded');
      }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-6 py-6">
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.7 1.35 9.7 0.825 9.36248 0.4875C9.025 0.15 8.5 0.15 8.16248 0.4875L0.4 8.3625C0.0625 8.7 0.0625 9.225 0.4 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.7 17.1375 9.7 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="no-scrollbar flex flex-col overflow-y-auto px-4 py-4">
        <h3 className="mb-4 ml-2 text-lg font-semibold text-gray-400">Menu</h3>

        <Link href="/upload" className="flex items-center gap-2 px-4 py-1.5 mb-4 bg-black border border-[#64FF64] text-white rounded-md hover:bg-[#101010] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          <span className='text-sm'>Upload</span>
        </Link>

        <ul className="flex flex-col gap-2">
          {/* Dashboard */}
          <li>
            <Link
                href="/dashboard"
                className={`group flex items-center gap-2.5 rounded-sm py-2 px-4 text-sm font-medium transition-colors hover:bg-white hover:text-black ${
                    pathname === '/dashboard' ? 'bg-[#64FF64] text-black' : 'text-white'
                }`}
                >
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.1 0.95H2.53C1.57 0.95 0.79 1.74 0.79 2.7V6.27C0.79 7.23 1.57 8.01 2.53 8.01H6.1C7.06 8.01 7.85 7.23 7.85 6.27V2.73C7.88 1.74 7.09 0.95 6.1 0.95Z"
                  fill=""
                />
                <path
                  d="M15.47 0.95H11.9C10.94 0.95 10.15 1.74 10.15 2.7V6.27C10.15 7.23 10.94 8.01 11.9 8.01H15.47C16.43 8.01 17.21 7.23 17.21 6.27V2.73C17.21 1.74 16.43 0.95 15.47 0.95Z"
                  fill=""
                />
                <path
                  d="M6.1 9.93H2.53C1.57 9.93 0.79 10.72 0.79 11.67V15.24C0.79 16.2 1.57 16.99 2.53 16.99H6.1C7.06 16.99 7.85 16.2 7.85 15.24V11.7C7.88 10.72 7.09 9.93 6.1 9.93Z"
                  fill=""
                />
                <path
                  d="M15.47 9.93H11.9C10.94 9.93 10.15 10.72 10.15 11.67V15.24C10.15 16.2 10.94 16.99 11.9 16.99H15.47C16.43 16.99 17.21 16.2 17.21 15.24V11.7C17.21 10.72 16.43 9.93 15.47 9.93Z"
                  fill=""
                />
              </svg>
              Dashboard
            </Link>
          </li>
          
          {/* Yield */}
          <li>
            <Link
                href="/yield"
                className={`group flex items-center gap-2.5 rounded-sm py-2 px-4 text-sm font-medium transition-colors hover:bg-white hover:text-black ${
                    pathname === '/yield' ? 'bg-[#64FF64] text-black' : 'text-white'
                }`}
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-yield" viewBox="0 0 16 16">
                <path d="M5.506 6.232V7H5.11v-.76L4.44 5h.44l.424.849h.016L5.748 5h.428zM6.628 5v2h-.396V5zm.684 1.676h.895V7H6.919V5h1.288v.324h-.895v.513h.842v.303h-.842zm1.521-.013h.848V7H8.437V5h.396z"/>
                <path fillRule="evenodd" d="M9.804 7V5h.73c.607 0 .894.364.894.995 0 .636-.291 1.005-.895 1.005zm.676-1.677h-.28v1.353h.28c.372 0 .54-.222.54-.674 0-.45-.169-.68-.54-.68Z"/>
                <path fillRule="evenodd" d="M7.022 14.434a1.131 1.131 0 0 0 1.96 0l6.857-11.667c.457-.778-.092-1.767-.98-1.767H1.144c-.889 0-1.437.99-.98 1.767zm.98-.434a.13.13 0 0 1-.064-.016.15.15 0 0 1-.054-.057L1.027 2.26a.18.18 0 0 1-.002-.183.2.2 0 0 1 .054-.06A.1.1 0 0 1 1.145 2h13.713a.12.12 0 0 1 .066.017q.028.015.055.06a.18.18 0 0 1-.003.183L8.12 13.927a.15.15 0 0 1-.054.057.13.13 0 0 1-.063.016Z"/>
              </svg>
              Yield
            </Link>
          </li>

          {/* Reports */}
          <li>
            <Link
                href="/reports"
                className={`group flex items-center gap-2.5 rounded-sm py-2 px-4 text-sm font-medium transition-colors hover:bg-white hover:text-black ${
                    pathname === '/reports' ? 'bg-[#64FF64] text-black' : 'text-white'
                }`}
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-bar-graph" viewBox="0 0 16 16">
                <path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5z"/>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
              </svg>
              Reports
            </Link>
          </li>

          {/* Resources */}
          <li>
            <Link
                href="/resources"
                className={`group flex items-center gap-2.5 rounded-sm py-2 px-4 text-sm font-medium transition-colors hover:bg-white hover:text-black ${
                    pathname === '/resources' ? 'bg-[#64FF64] text-black' : 'text-white'
                }`}
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-nut" viewBox="0 0 16 16">
                <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z"/>
                <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z"/>
              </svg>
              Resources
            </Link>
          </li>

          {/* Chatbot */}
          <li>
            <Link
                href="/chatbot"
                className={`group flex items-center gap-2.5 rounded-sm py-2 px-4 text-sm font-medium transition-colors hover:bg-white hover:text-black ${
                    pathname === '/chatbot' ? 'bg-[#64FF64] text-black' : 'text-white'
                }`}
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
              </svg>
              AI Assistant
            </Link>
          </li>
          
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
