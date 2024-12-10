import type { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { PROJECTS_QUERY } from '@/lib/sanity/queries'
import { ProjectCard } from "@/components/ShowCase";

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'My projects and work',
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await client.fetch(PROJECTS_QUERY)

  console.log("projects", projects);

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <ProjectCard
            key={project._id}
            id={project._id}
            
            title={project.title}
            description={[project.shortDescription]}
            image={project.images[0]?.asset?.url || '/default-image.png'}
            demoUrl={project.githubLink || '#'}
            technologies={project.hashtags || []}
          />
        ))}
      </div>
    </main>
  )
}