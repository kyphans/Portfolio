export default function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-primary/20 bg-background p-6">
      {/* Image placeholder */}
      <div className="mb-4 h-48 w-full rounded-md bg-primary/10"></div>

      {/* Title placeholder */}
      <div className="mb-3 h-6 w-3/4 rounded bg-primary/10"></div>

      {/* Description placeholders */}
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-primary/10"></div>
        <div className="h-4 w-5/6 rounded bg-primary/10"></div>
      </div>

      {/* Hashtags placeholder */}
      <div className="mt-4 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-primary/10"></div>
        <div className="h-6 w-20 rounded-full bg-primary/10"></div>
        <div className="h-6 w-14 rounded-full bg-primary/10"></div>
      </div>
    </div>
  )
}
