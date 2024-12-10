import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  image: string;
  category: string;
  title: string;
  slug: string;
  shortDescription: string;
  estimatedReadingTime: number;
  hashtags: string[];
  referenceLink: string[];
}

const BlogCard: FC<BlogCardProps> = ({ id, image, category, title, slug, shortDescription, estimatedReadingTime, hashtags, referenceLink }) => {
  return (
    <div
      key={id}
      className="group relative rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
    >
      <div className="via-[primary/50 absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary to-primary opacity-0 blur-sm transition duration-500 group-hover:opacity-70 group-hover:blur" />
      <div className="relative h-[300px] overflow-hidden rounded-lg bg-[#191919]">
        <div className="relative h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-4rem)] transform bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
          <span className="mb-2 block text-sm uppercase">
            {category}
          </span>
          <h3 className="mb-4 text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{shortDescription}</p>
          <p className="text-sm text-gray-400 mt-2">Estimated Reading Time: {estimatedReadingTime} mins</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {hashtags?.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">#{tag}</span>
            ))}
          </div>
          <Link
            href={`/blog/${slug}`}
            className="inline-block rounded border border-white/80 px-6 py-2 transition-colors duration-300 hover:border-primary hover:bg-primary mt-10"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;