import BlogCard from './BlogCard'

interface RelatedPost {
  _id: string
  title: string
  slug: { current: string }
  images: Array<{ asset: { url: string } }>
  category: string
  shortDescription: string
  hashtags?: string[]
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 border-t border-primary/20 pt-12">
      <h2 className="mb-8 text-3xl font-bold">Related Posts</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[280px_auto_1fr_auto] lg:gap-x-6 lg:gap-y-0">
        {posts.map((post) => {
          const imageUrl = post.images[0]?.asset?.url || '/default-image.png'
          return (
            <BlogCard
              key={post._id}
              id={post._id}
              image={imageUrl}
              category={post.category}
              title={post.title}
              slug={post.slug.current}
              shortDescription={post.shortDescription}
              hashtags={post.hashtags || []}
            />
          )
        })}
      </div>
    </section>
  )
}
