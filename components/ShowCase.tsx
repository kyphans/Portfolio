'use client'

import { FC, useState } from 'react'
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

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demoUrl,
  technologies,
  className
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isActive) {
      e.preventDefault()
      setIsActive(true)
    }
    // If isActive is true, allow the link to navigate normally
  }

  const handleClickOutside = () => {
    if (isActive) {
      setIsActive(false)
    }
  }

  return (
    <>
      {isActive && (
        <div
          className="fixed inset-0 z-10"
          onClick={handleClickOutside}
          onTouchEnd={handleClickOutside}
        />
      )}
      <div
        className={`group relative rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${isActive ? 'shadow-xl shadow-primary/20 z-20' : ''}`}
      >
        {/* Animated border gradient */}
        <div className={`absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 blur-sm transition duration-500 group-hover:opacity-70 group-hover:blur ${isActive ? 'opacity-70 blur' : ''}`} />
        <div className="relative block h-[400px] overflow-hidden rounded-lg bg-background">
          {/* Thumbnail Image */}
          <div className="relative h-[250px] w-full overflow-hidden">
            <Image
              priority
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-transform duration-500 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
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
          <Link
            href={demoUrl}
            target="_blank"
            onClick={handleClick}
            onTouchEnd={handleClick}
          >
            <div className={`absolute inset-0 flex translate-y-[100%] flex-col justify-end bg-gradient-to-t from-primary to-primary/90 p-6 transition-transform duration-500 group-hover:translate-y-0 ${isActive ? 'translate-y-0' : ''}`}>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              {description.map((text, index) => (
                <p key={index} className="/90">
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
      </div>
    </>
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
    <div className="bg-background py-6 md:py-20" id="ShowCase">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold">My Projects</h1>
          <p className="text-muted">
            Here are some of my recent projects that I've worked on.
          </p>
          <p className="text-muted">
            Click on any project to see the live demo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowCase 