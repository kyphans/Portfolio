export default function AboutLoading() {
  return (
    <main className="container animate-pulse py-12">
      {/* Page title placeholder */}
      <div className="mb-8 h-12 w-80 rounded bg-primary/10"></div>

      {/* Content sections */}
      <div className="space-y-8">
        {/* Section 1 */}
        <div className="space-y-4">
          <div className="h-8 w-64 rounded bg-primary/10"></div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-primary/10"></div>
            <div className="h-4 w-full rounded bg-primary/10"></div>
            <div className="h-4 w-5/6 rounded bg-primary/10"></div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <div className="h-8 w-56 rounded bg-primary/10"></div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-primary/10"></div>
            <div className="h-4 w-4/5 rounded bg-primary/10"></div>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="h-96 w-full rounded bg-primary/10"></div>

        {/* Section 3 */}
        <div className="space-y-4">
          <div className="h-8 w-72 rounded bg-primary/10"></div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-primary/10"></div>
            <div className="h-4 w-full rounded bg-primary/10"></div>
            <div className="h-4 w-3/4 rounded bg-primary/10"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
