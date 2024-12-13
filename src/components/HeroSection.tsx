import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/Post";
import { CalendarIcon, UserIcon } from "lucide-react";
import { format } from "date-fns";

export default function HeroSection({ post }: { post: Post }) {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src={urlFor(post.mainImage).url()}
        alt={post.title}
        fill
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl mb-6">{post.description}</p>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <span className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              {format(new Date(post._createdAt), "MMMM d, yyyy")}
            </span>
            <span className="flex items-center">
              <UserIcon className="w-5 h-5 mr-2" />
              {post.author.name}
            </span>
          </div>
          <Link
            href={`/posts/${post.slug.current}`}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
