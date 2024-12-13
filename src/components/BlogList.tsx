import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import { format } from "date-fns";
// import { Post } from "@/types/Post";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[3..] {
    _id,
    title,
    description,
    slug,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{title}
  }`;
  return client.fetch(query);
}

export default async function BlogList() {
  const posts: BlogPost[] = await getPosts();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Link href={`/post/${post.slug.current}`}>
                <div className="relative h-48">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    layout="fill"
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
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span>{post.author._ref}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <time dateTime={post._createdAt}>
                      {format(new Date(post._createdAt), "MMMM d, yyyy")}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
