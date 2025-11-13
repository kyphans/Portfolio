import type { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { PROJECTS_QUERY } from '@/lib/sanity/queries'
import { ProjectCard } from "@/components/ShowCase";
import { Inter_Tight } from 'next/font/google'

const interTight = Inter_Tight({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'My projects and work',
}

// export const dynamic = "force-dynamic";
export const revalidate = 14400; // 4 hours

export default async function ProjectsPage() {
  const projects = await client.fetch(PROJECTS_QUERY)

  return (
    <main className="container py-12">
      <div className="mb-16 w-full">
        <h1
          className={`${interTight.className} text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl`}
        >
          Projects
        </h1>
        <div className="mt-4 h-1 w-24 bg-primary"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => {
          const imageUrl =
            project.images[0]?.asset?.url || "/default-image.png"; // Define a constant for the image URL
          return (
            <ProjectCard
              key={project._id}
              id={project._id}
              title={project.title}
              description={[project.shortDescription]}
              image={imageUrl}
              demoUrl={project.githubLink || "#"}
              technologies={project.hashtags || []}
            />
          );
        })}
      </div>
    </main>
  );
}