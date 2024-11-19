"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AboutProps {
  aboutImage: string;
}

const About: FC<AboutProps> = ({ aboutImage }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="section bg-background" id="About">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex h-full max-h-[400px] w-full items-center justify-center">
            <Image
              src={aboutImage}
              alt="About me"
              width={450}
              height={450}
              className="h-full max-h-[450px] rounded-lg object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h1 className="heading">About Me</h1>
            <div className="space-y-4">
              <p className="text-muted">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable.
              </p>
              <p className="text-muted">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable.
              </p>
              <p className="text-muted">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable.
              </p>
              <div className="flex flex-col gap-4 pt-6 md:flex-row">
                <Button className="h-[55px] w-full bg-primary text-lg capitalize transition-colors duration-300 hover:bg-primary-dark md:w-[195px]">
                  Download CV
                </Button>
                <Button className="h-[55px] w-full bg-primary text-lg capitalize transition-colors duration-300 hover:bg-primary-dark md:w-[195px]">
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollTop}
        className="fixed bottom-[3%] right-[2%] z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-colors duration-300 hover:bg-primary-dark"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="text-foreground"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default About;
