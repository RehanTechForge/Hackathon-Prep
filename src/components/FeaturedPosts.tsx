import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/Post";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <Link href={`/post/${post.slug.current}`}>
                <div className="relative h-48">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    objectFit="cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    href={`/post/${post.slug.current}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <time dateTime={post._createdAt}>
                    {format(new Date(post._createdAt), "MMMM d, yyyy")}
                  </time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
