'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string[]
  image: string
  demoUrl: string
  technologies: string[]
}

interface ProjectCardProps extends Project {
  className?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demoUrl,
  technologies,
  className
}) => {
  return (
    <div className="group relative rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 blur-sm transition duration-500 group-hover:opacity-70 group-hover:blur" />

      <Link
        href={demoUrl}
        target="_blank"
        className="relative block h-[400px] overflow-hidden rounded-lg bg-background"
      >
        {/* Thumbnail Image */}
        <div className="relative h-[250px] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content Default */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex translate-y-[100%] flex-col justify-end bg-gradient-to-t from-primary to-primary/90 p-6 text-white transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          {description.map((text, index) => (
            <p key={index} className="text-white/90">
              {text}
            </p>
          ))}
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-white/30 px-3 py-1 text-xs backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

const ShowCase: FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Portfolio Website",
      description: [
        "A personal portfolio website built with Next.js 14",
        "Features modern design and smooth animations",
      ],
      image: "/projects/portfolio.png",
      demoUrl: "https://portfolio-demo.com",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description: [
        "Full-featured e-commerce platform with cart and checkout",
        "Integrated with Stripe payment",
      ],
      image: "/projects/EcommerceTemplate.jpg",
      demoUrl: "https://ecommerce-demo.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: "3",
      title: "Task Management App",
      description: [
        "Collaborative task management application",
        "Real-time updates using WebSocket",
      ],
      image: "/projects/TaskManagerApp.png",
      demoUrl: "https://taskapp-demo.com",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    },
    // Thêm các projects khác
  ];

  return (
    <div className="py-20 bg-background" id="ShowCase">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-muted">
            Here are some of my recent projects that I've worked on.
          </p>
          <p className="text-muted">
            Click on any project to see the live demo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowCase 