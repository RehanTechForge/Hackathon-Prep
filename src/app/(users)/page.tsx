import { client } from "@/sanity/lib/client";
import HeroSection from "@/components/HeroSection";
// import FeaturedPosts from "@/components/FeaturedPosts";
import RecentPosts from "@/components/RecentPosts";
import PopularPosts from "@/components/PopularPosts";
import CategoriesSection from "@/components/CategoriesSection";
import Newsletter from "@/components/NewsLetter";
import { Post } from "@/types/Post";
// import { Category } from "@/types/Category";

async function getLatestPost() {
  const query = `*[_type == "post"] | order(_createdAt desc)[0] {
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

async function getFeaturedPosts() {
  const query = `*[_type == "post" && featured == true] | order(_createdAt desc)[0...3] {
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

async function getRecentPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc)[0...6] {
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

async function getPopularPosts() {
  const query = `*[_type == "post"] | order(views desc)[0...4] {
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

async function getCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    description
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const latestPost: Post = await getLatestPost();
  // const featuredPosts: Post[] = await getFeaturedPosts();
  const recentPosts: Post[] = await getRecentPosts();
  const popularPosts: Post[] = await getPopularPosts();
  const categories: Category[] = await getCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection post={latestPost} />
      {/* <FeaturedPosts posts={featuredPosts} /> */}
      <RecentPosts posts={recentPosts} />
      <PopularPosts posts={popularPosts} />
      <CategoriesSection categories={categories} />
      <Newsletter />
    </div>
  );
}
