import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PortableTextReactComponents,
  PortableTextComponentProps,
} from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const RichTextComponent: Partial<PortableTextReactComponents> = {
  // Handling image types
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt: string } }) => (
      <figure className="my-8">
        <Image
          src={urlFor(value.asset).url()}
          alt={value.alt || "Blog post image"}
          width={1200} // Set width as per your requirement
          height={800} // Set height as per your requirement
          className="rounded-lg shadow-lg w-full h-auto"
        />
        {value.alt && (
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },

  // Handling links (with optional href and open in new tab for external links)
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: string };
    }) => (
      <Link
        href={value?.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline transition-colors duration-200"
      >
        {children}
      </Link>
    ),
  },

  // Handling block elements (h1, h2, h3, normal text, blockquote)
  block: {
    h1: ({ children }: PortableTextComponentProps<any>) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<any>) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<any>) => (
      <h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>
    ),
    normal: ({ children }: PortableTextComponentProps<any>) => (
      <p className="text-base text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: PortableTextComponentProps<any>) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },
};

export default RichTextComponent;
