import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'About me and my experience',
}

export default function AboutPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        {/* Add your about content here */}
      </div>
    </main>
  )
} 