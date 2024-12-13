// Types for different parts of the blog post
interface Author {
  _ref: string;
  _type: "reference";
  name: string;
}

interface ImageAsset {
  _ref: string;
  _type: "reference";
}

interface MainImage {
  alt: string;
  asset: ImageAsset;
}

interface Category {
  _ref: string;
  _type: "reference";
  _key: string;
  title: string;
  description?: string;
}

interface Slug {
  current: string;
  _type: "slug";
}

// The main Blog Post Type
interface BlogPost {
  _id: string;
  _type: "post";
  title: string;
  slug: Slug;
  description: string;
  author: Author;
  mainImage: MainImage;
  body: string[]; // Assuming the body is an array of strings (could be rich text if using Sanity)
  categories: Category[];
  _updatedAt: string; // ISO Date string
  _createdAt: string; // ISO Date string
  _rev: string;
}
