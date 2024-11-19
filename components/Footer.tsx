"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";

const Footer: FC = () => {
  return (
    <footer className="bg-primary py-12 text-foreground">
      <div className="container px-4 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Outro Section */}
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold">Stay Connected!</h2>
            </div>

            {/* Contact Form Section */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold">Contact Me</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground"
                  rows={4}
                />
                <Button className="w-full bg-white/40 text-lg capitalize transition-colors duration-300 hover:bg-white/50">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between text-center md:text-right">
            {/* Copyright Section */}

            <div className="md:pt-[68px]">
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
                    src="/icons/linkedin.svg"
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
                    src="/icons/facebook.svg"
                    alt="GitHub"
                    className="h-8 w-8"
                  />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/x.svg" alt="Twitter" className="h-8 w-8" />
                </a>
              </div>
              <p className="text-muted">
                &copy; {new Date().getFullYear()} Your Name. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
