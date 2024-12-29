"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
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
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 z-[999] w-full bg-background/70 backdrop-blur-sm ${
      theme === 'green' ? 'theme-green' : 'theme-pink'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors hover:text-primary ${
                pathname === item.path ? "font-medium text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* <ThemeToggle /> */}
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
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

      {isOpen && (
        <div className="bg-background/90 md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors hover:text-primary ${
                  pathname === item.path ? "font-medium text-primary" : ""
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
