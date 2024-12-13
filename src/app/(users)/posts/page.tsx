import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import { format } from "date-fns";

interface Post {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  author: { name: string; image: any };
  categories: { title: string }[];
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage,
    _createdAt,
    author->{name, image},
    categories[]->{title}
  }`;
  return client.fetch(query);
}

export default async function PostsPage() {
  const posts: BlogPost[] = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">All Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post._id} className="overflow-hidden flex flex-col">
            <Link href={`/post/${post.slug.current}`}>
              <div className="relative aspect-video">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="line-clamp-2">
                <Link
                  href={`/posts/${post.slug.current}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.description}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 mt-auto">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <UserIcon className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post._createdAt}>
                  {format(new Date(post._createdAt), "MMMM d, yyyy")}
                </time>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.map((category) => (
                  <Badge key={category.title} variant="secondary">
                    {category.title}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
