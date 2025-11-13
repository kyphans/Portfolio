export default function ArticleSkeleton() {
  return (
    <div className="container animate-pulse py-12">
      {/* Title placeholder */}
      <div className="mb-8 h-12 w-3/4 rounded bg-primary/10"></div>

      {/* Hero image placeholder */}
      <div className="mb-8 h-96 w-full rounded bg-primary/10"></div>

      {/* Reading time placeholder */}
      <div className="mb-6 h-4 w-48 rounded bg-primary/10"></div>

      {/* Content placeholders */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-primary/10"></div>
        <div className="h-4 w-full rounded bg-primary/10"></div>
        <div className="h-4 w-5/6 rounded bg-primary/10"></div>
        <div className="h-4 w-full rounded bg-primary/10"></div>
        <div className="h-4 w-4/5 rounded bg-primary/10"></div>

        {/* Image in content */}
        <div className="my-8 h-64 w-full rounded bg-primary/10"></div>

        <div className="h-4 w-full rounded bg-primary/10"></div>
        <div className="h-4 w-full rounded bg-primary/10"></div>
        <div className="h-4 w-3/4 rounded bg-primary/10"></div>
      </div>

      {/* Reference links section */}
      <div className="my-8 border-t border-primary/20 pt-8">
        <div className="mb-4 h-4 w-32 rounded bg-primary/10"></div>
        <div className="space-y-2">
          <div className="h-4 w-64 rounded bg-primary/10"></div>
          <div className="h-4 w-56 rounded bg-primary/10"></div>
        </div>
      </div>

      {/* Hashtags section */}
      <div className="border-t border-primary/20 pt-8">
        <div className="mb-4 h-4 w-24 rounded bg-primary/10"></div>
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-full bg-primary/10"></div>
          <div className="h-6 w-24 rounded-full bg-primary/10"></div>
          <div className="h-6 w-16 rounded-full bg-primary/10"></div>
          <div className="h-6 w-28 rounded-full bg-primary/10"></div>
        </div>
      </div>
    </div>
  )
}
