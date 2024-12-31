"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from 'next-themes'

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 z-[999] w-full ${
      theme === 'green' ? 'theme-green' : 'theme-pink'
    }`}>
      <div className="container flex justify-center py-4">
        <div className="flex h-14 items-center justify-between gap-8 rounded-full bg-white/10 px-8 backdrop-blur-xl shadow-xl shadow-black/30">
          <Link href="/" className="text-lg font-bold text-white hover:text-primary transition-colors">
            Portfolio
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === item.path ? "font-semibold text-primary" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-white/10 backdrop-blur-xl md:hidden mx-4 rounded-2xl shadow-xl shadow-black/30">
          <div className="flex flex-col gap-4 py-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors hover:text-primary ${
                  pathname === item.path ? "font-semibold text-primary" : "text-white/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
