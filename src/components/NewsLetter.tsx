// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Subscribe to Our Newsletter
      </h2>
      <form className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full md:w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
