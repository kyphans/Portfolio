"use client";

import { FC } from "react";
import Image from "next/image";

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
      logo: "/tma.png",
      description:
        "Working on various software development projects, focusing on delivering high-quality solutions to clients.",
    },
    {
      company: "OrangeTheory Fitness",
      logo: "/orangetheoryfitness.jpg",
      description:
        "Developing and maintaining fitness-related applications to enhance user experience and engagement.",
    },
  ];

  return (
    <div className="section bg-background" id="RecentWork">
      <div className="container px-4 md:px-10">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold">My Recent Work</h1>
          <p className="text-muted">
            ({experience} years of experience)
          </p>
          <p className="text-muted">
            Companies I have worked for
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {works.map((work, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={work.logo}
                alt={work.company}
                width={150}
                height={150}
                className="mb-4 rounded-lg object-contain"
                priority
              />
              <h2 className="mb-2 text-2xl font-bold">{work.company}</h2>
              <p className="text-muted">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
