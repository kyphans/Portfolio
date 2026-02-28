"use client";

import { FC } from "react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { Counter } from "@/components/ui/animated-counter";

// Function to calculate years of experience
const calculateExperience = (startDate: string) => {
  const [day, month, year] = startDate.split("/").map(Number);
  const start = new Date(year, month - 1, day);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return Math.ceil(years);
};

const RecentWork: FC = () => {
  const experience = calculateExperience("03/08/2022");
  const works = [
    {
      company: "TMA Solutions",
      role: "Software Engineer",
      logo: "/tma.png",
      description: [
        "Working on various software development projects,",
        "focusing on delivering high-quality solutions to clients.",
      ],
    },
    {
      company: "OrangeTheory Fitness",
      role: "Frontend Developer",
      logo: "/orangetheoryfitness.jpg",
      description: [
        "Developing and maintaining fitness-related applications",
        "to enhance user experience and engagement.",
      ],
    },
  ];

  return (
    <div className="section bg-background" id="RecentWork">
      <div className="container">
        <SectionHeader
          subtitle="PROFESSIONAL JOURNEY"
          title="Experience"
          description={
            <span className="inline-flex items-center gap-1">
              (
              <Counter
                end={experience}
                duration={2}
                fontSize={15}
                className="text-white"
              />
              years of professional experience building scalable web solutions
              for global companies.)
            </span>
          }
        />
        <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr_auto] gap-x-12 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className="row-span-4 grid grid-rows-subgrid gap-y-4 rounded-[32px] bg-[#1a1a1a] p-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 sm:p-12"
            >
              {/* Logo */}
              <div className="flex items-center justify-center py-4">
                <Image
                  src={work.logo}
                  alt={work.company}
                  width={150}
                  height={150}
                  className="rounded-[24px] object-contain"
                  priority
                />
              </div>

              {/* Company Name */}
              <h2 className="flex items-center justify-center text-2xl font-bold">
                {work.company}
              </h2>

              {/* Description */}
              <div className="flex flex-col justify-start gap-1 text-muted">
                {work.description.map((line, i) => (
                  <p key={i} className="px-4 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              {/* Role Badge */}
              <div className="flex items-end justify-center pb-2">
                <span className="rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  {work.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
