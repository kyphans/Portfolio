import GridSkeleton from '@/components/skeletons/GridSkeleton'

export default function ProjectsLoading() {
  return (
    <main className="container py-12">
      <div className="mb-8 animate-pulse">
        {/* Page title placeholder */}
        <div className="mb-4 h-12 w-64 rounded bg-primary/10"></div>
        {/* Page description placeholder */}
        <div className="h-4 w-96 rounded bg-primary/10"></div>
      </div>

      {/* Project cards grid skeleton */}
      <GridSkeleton count={6} />
    </main>
  )
}
