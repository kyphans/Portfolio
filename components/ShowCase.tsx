"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Project {
  id: string;
  title: string;
  description: string[];
  image: string;
  demoUrl: string;
  technologies: string[];
}

interface ProjectCardProps extends Project {
  className?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demoUrl,
  technologies,
  className,
}) => {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-[32px] bg-[#1a1a1a] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 ${className || ""}`}
    >
      <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-white/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
          {technologies.length > 0 && (
            <span className="text-primary">{technologies[0]}</span>
          )}
          {technologies.length > 1 && (
            <span className="text-gray-500">
              {technologies.slice(1).join(" ")}
            </span>
          )}
        </div>

        <h3 className="mb-4 text-2xl font-bold leading-snug text-white">
          {title}
        </h3>

        <div className="mb-8 text-[15px] leading-relaxed text-gray-400">
          {description.join(" ")}
        </div>

        <div className="mt-auto">
          <Link
            href={demoUrl}
            target="_blank"
            className="group/link inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-white"
          >
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ShowCase: FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Professional Portfolio",
      description: [
        "A high-performance portfolio website built with modern technologies featuring dark mode and motion design.",
      ],
      image: "/projects/portfolio.png",
      demoUrl: "https://portfolio-demo.com",
      technologies: ["NEXT.JS", "TYPESCRIPT"],
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description: [
        "Full-featured online store with complex inventory management, Stripe integration, and real-time shipping tracking.",
      ],
      image: "/projects/EcommerceTemplate.jpg",
      demoUrl: "https://ecommerce-demo.com",
      technologies: ["REACT", "STRIPE"],
    },
    {
      id: "3",
      title: "Task Management App",
      description: [
        "Real-time collaboration tool for teams with drag-and-drop boards, chat features, and automated notifications.",
      ],
      image: "/projects/TaskManagerApp.png",
      demoUrl: "https://taskapp-demo.com",
      technologies: ["VUEJS", "SOCKET.IO"],
    },
  ];

  return (
    <div className="relative border-none bg-background py-20" id="ShowCase">
      <div className="container mx-auto px-4 md:px-8 xl:max-w-7xl">
        <SectionHeader
          subtitle="RECENT WORK"
          title="Featured Projects"
          description="Click on any project to see the live demo and detailed technical case study."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
