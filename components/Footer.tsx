"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

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
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left Column: Form Card */}
              <div className="rounded-[40px] bg-[#1a1a1a] p-8 text-left shadow-2xl sm:p-12">
                <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-0">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src="/avt.png"
                        alt="Profile"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Ky Phan</h3>
                      <p className="text-sm text-gray-400">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      Open to Work
                    </span>
                  </div>
                </div>

                <h2 className="mb-8 text-3xl font-bold text-white">
                  Stay Connected!
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Ky Phan"
                        className="w-full rounded-2xl border-0 bg-[#242424] px-5 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-2xl border-0 bg-[#242424] px-5 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      How can I help?
                    </label>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="w-full rounded-2xl border-0 bg-[#242424] px-5 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-2xl bg-white py-4 text-sm font-bold tracking-wider text-black transition-colors hover:bg-gray-200"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Right Column: Contact Info */}
              <div className="flex flex-col justify-center text-left text-white lg:pl-8">
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <p className="mb-10 text-lg leading-relaxed text-white/90">
                  Looking to start a new project or just want to say hi? My
                  inbox is always open. I&apos;ll get back to you as soon as
                  possible!
                </p>

                <div className="mb-12 space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white/20">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Email me
                      </p>
                      <p className="text-lg font-medium">contact@kyphan.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white/20">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Location
                      </p>
                      <p className="text-lg font-medium">
                        Ho Chi Minh City, VN
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
                    Follow me on social media!
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white transition-colors hover:bg-white/30"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white transition-colors hover:bg-white/30"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white transition-colors hover:bg-white/30"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-20 border-t border-white/20 pt-8">
              <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/90 sm:flex-row">
                <p>
                  &copy; {new Date().getFullYear()} Ky Phan. All rights
                  reserved.
                </p>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
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
