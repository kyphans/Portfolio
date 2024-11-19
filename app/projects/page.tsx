import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'My projects and work',
}

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your projects grid here */}
      </div>
    </main>
  )
} 