// components/PopularPosts.tsx
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/Post";
import { urlFor } from "@/sanity/lib/image";

export default function PopularPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Popular Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link href={`/posts/${post.slug.current}`}>
              <div className="relative w-full h-48">
                <Image
                  src={urlFor(post.mainImage.asset).url()}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
