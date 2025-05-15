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
    sidebarExpanded
      ? body.classList.add('sidebar-expanded')
      : body.classList.remove('sidebar-expanded');
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0 ${
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
        <ul className="flex flex-col gap-2">
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
          {/* Add more <li> for other sidebar links here */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
