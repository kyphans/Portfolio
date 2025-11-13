"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer: FC = () => {
  const pathname = usePathname();

  // Hide footer on Sanity Studio routes
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <>
      <footer className="relative bg-primary py-20 text-foreground">
        <div className="before:bg-[position-y:-2px] before:absolute before:right-0 before:top-[-110px] before:z-0 before:h-[110px] before:w-full before:scale-y-[-1] before:bg-[url('/divider1.svg')] before:bg-repeat-x before:object-cover">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Left Column */}
              <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-black p-4 shadow-2xl sm:p-6 md:p-8">
                {/* Profile Section */}
                <div className="mb-6 flex flex-col items-center gap-4 sm:mb-8 sm:flex-row sm:items-start">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                    <Image
                      src="/avt.png"
                      alt="Profile"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      Ky Phan
                    </h3>
                    <p className="text-sm text-gray-400 sm:text-base">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400 sm:px-4 sm:py-2 sm:text-sm">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      Open to Work
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                {/* <div className="mb-8 flex flex-wrap gap-3">
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gray-800/50 px-4 py-2.5 text-sm text-gray-300 transition-all hover:bg-gray-700/50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @yourprofile
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gray-800/50 px-4 py-2.5 text-sm text-gray-300 transition-all hover:bg-gray-700/50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    @yourprofile
                  </a>
                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gray-800/50 px-4 py-2.5 text-sm text-gray-300 transition-all hover:bg-gray-700/50"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @yourprofile
                  </a>
                </div> */}

                {/* Stay Connected Section */}
                <div className="rounded-2xl bg-gray-800/30 p-4 sm:p-6">
                  <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
                    Stay Connected!
                  </h2>
                  <form className="space-y-3 sm:space-y-4">
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-xl border-0 bg-gray-700/50 px-3 py-3 text-sm text-white placeholder-gray-500 transition-all focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary sm:px-4 sm:py-3.5"
                      />
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full rounded-xl border-0 bg-gray-700/50 px-3 py-3 text-sm text-white placeholder-gray-500 transition-all focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary sm:px-4 sm:py-3.5"
                      />
                    </div>
                    <textarea
                      placeholder="How can I help?"
                      rows={4}
                      className="sm:rows-5 w-full rounded-xl border-0 bg-gray-700/50 px-3 py-3 text-sm text-white placeholder-gray-500 transition-all focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary sm:px-4 sm:py-3.5"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 active:scale-[0.98] sm:py-4 sm:text-base"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col justify-between text-center md:text-right">
                {/* Copyright Section */}
                <div className="">
                  <p className="mb-4 text-muted">
                    Follow me on social media and get in touch!
                  </p>
                  <div className="mb-4 flex justify-center space-x-4 md:justify-end">
                    <a
                      href="https://www.linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons-social/linkedin.svg"
                        alt="LinkedIn"
                        className="h-8 w-8"
                      />
                    </a>
                    <a
                      href="https://github.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons-social/facebook.svg"
                        alt="GitHub"
                        className="h-8 w-8"
                      />
                    </a>
                    <a
                      href="https://twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/icons-social/x.svg"
                        alt="Twitter"
                        className="h-8 w-8"
                      />
                    </a>
                  </div>
                  <p className="text-muted">
                    &copy; {new Date().getFullYear()} Ky Phan. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
