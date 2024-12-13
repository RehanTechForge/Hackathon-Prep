// "use client";
// import { PortableText } from "@portabletext/react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { format } from "date-fns";
// import { CalendarIcon, UserIcon, TagIcon } from "lucide-react";
// import RichTextComponent from "@/components/RichTextComponent";
// import { Post } from "@/types/Post";

// async function getPost(slug: string): Promise<any> {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     _id,
//     _createdAt,
//     _updatedAt,
//     title,
//     description,
//     slug,
//     mainImage,
//     categories[]->{
//       _id,
//       title
//     },
//     author->{
//       _id,
//       name,
//       image
//     },
//     body
//   }`;

//   return client.fetch(query, { slug });
// }

// export default async function PostDetails({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   // console.log("Params", params.slug);

//   const slug = (await params).slug;
//   console.log("dasdas dasda", slug);

//   // if (!params?.slug) {
//   //   return <h1>Error: No post found.</h1>;
//   // }

//   const post = await getPost(slug);

//   return (
//     <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <header className="mb-8">
//         <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//           {post.title}
//         </h1>
//         <p className="text-xl text-gray-600 mb-6">{post.description}</p>
//         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
//           {post.author && (
//             <div className="flex items-center">
//               <UserIcon className="w-5 h-5 mr-2" />
//               <span>{post.author.name}</span>
//             </div>
//           )}
//           <div className="flex items-center">
//             <CalendarIcon className="w-5 h-5 mr-2" />
//             <time dateTime={post._createdAt}>
//               {format(new Date(post._createdAt), "MMMM d, yyyy")}
//             </time>
//           </div>
//           {post.categories && post.categories.length > 0 && (
//             <div className="flex items-center">
//               <TagIcon className="w-5 h-5 mr-2" />
//               <span>
//                 {post.categories.map((cat: any) => cat.title).join(", ")}
//               </span>
//             </div>
//           )}
//         </div>
//       </header>

//       {post.mainImage && (
//         <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
//           <Image
//             src={urlFor(post.mainImage).url()}
//             alt={post.mainImage.alt || post.title}
//             layout="fill"
//             objectFit="cover"
//             className="transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//       )}

//       <div className="prose prose-lg max-w-none">
//         <PortableText value={post.body} components={RichTextComponent} />
//       </div>

//       {post.author && post.author.image && (
//         <footer className="mt-12 pt-6 border-t border-gray-200">
//           <div className="flex items-center">
//             <Image
//               src={urlFor(post.author.image).url()}
//               alt={post.author.name}
//               width={64}
//               height={64}
//               className="rounded-full mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold">{post.author.name}</h3>
//               <p className="text-gray-600">Author</p>
//             </div>
//           </div>
//         </footer>
//       )}
//     </article>
//   );
// }
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { format } from "date-fns";
import { CalendarIcon, UserIcon, TagIcon } from "lucide-react";
import RichTextComponent from "@/components/RichTextComponent";

// Fetch the post by slug
async function getPost(slug: string): Promise<any> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    description,
    slug,
    mainImage,
    categories[]->{
      _id,
      title
    },
    author->{
      _id,
      name,
      image
    },
    body
  }`;

  return client.fetch(query, { slug });
}

// Generate static params (this replaces `getStaticPaths`)
export async function generateStaticParams() {
  const query = `*[_type == "post"]{
    slug
  }`;

  const posts = await client.fetch(query);

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

// Main PostDetails component
export default async function PostDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  if (!post) {
    return <h1>Error: No post found.</h1>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{post.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          {post.author && (
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 mr-2" />
              <span>{post.author.name}</span>
            </div>
          )}
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <time dateTime={post._createdAt}>
              {format(new Date(post._createdAt), "MMMM d, yyyy")}
            </time>
          </div>
          {post.categories && post.categories.length > 0 && (
            <div className="flex items-center">
              <TagIcon className="w-5 h-5 mr-2" />
              <span>
                {post.categories.map((cat: any) => cat.title).join(", ")}
              </span>
            </div>
          )}
        </div>
      </header>

      {post.mainImage && (
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={RichTextComponent} />
      </div>

      {post.author && post.author.image && (
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center">
            <Image
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{post.author.name}</h3>
              <p className="text-gray-600">Author</p>
            </div>
          </div>
        </footer>
      )}
    </article>
  );
}
