// components/CategoriesSection.tsx
// import { Category } from "@/types/Category";

export default function CategoriesSection({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Explore Categories
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category._key}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold">{category.title}</h3>
            <p className="text-sm text-gray-600">
              {category?.description || ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
