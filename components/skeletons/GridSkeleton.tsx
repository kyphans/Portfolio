import CardSkeleton from './CardSkeleton'

interface GridSkeletonProps {
  count?: number
}

export default function GridSkeleton({ count = 6 }: GridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}
