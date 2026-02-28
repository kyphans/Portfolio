import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  image: string;
  category?: string;
  title: string;
  slug: string;
  shortDescription: string;
  hashtags: string[];
}

const BlogCard: FC<BlogCardProps> = ({
  id,
  image,
  category,
  title,
  slug,
  shortDescription,
  hashtags,
}) => {
  return (
    <div
      key={id}
      className="group flex flex-col overflow-hidden rounded-[32px] bg-[#1a1a1a] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 lg:row-span-4 lg:grid lg:grid-rows-subgrid"
    >
      {/* Image with Category Badge */}
      <div className="relative h-[280px] w-full overflow-hidden bg-white/5 lg:h-full">
        <Image
          priority
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <div className="absolute left-6 top-6 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
            {category}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="px-8 pt-8 text-2xl font-bold leading-snug text-white sm:px-10 sm:pt-10">
        {title}
      </h3>

      {/* Description + Meta */}
      <div className="flex flex-1 flex-col gap-3 px-8 pb-4 sm:px-10 lg:flex-none">
        <p className="text-[15px] leading-relaxed text-gray-400">
          {shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {hashtags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Link */}
      <div className="mt-auto flex items-end px-8 pb-8 pt-4 sm:px-10 sm:pb-10 lg:mt-0">
        <Link
          href={`/blogs/${slug}`}
          className="group/link inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-white"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
