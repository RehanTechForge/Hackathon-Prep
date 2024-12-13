"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Your Blog
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              All Posts
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-2xl font-bold text-gray-900">
                    Your Blog
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Home
                  </Link>
                  <Link
                    href="/posts"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    All Posts
                  </Link>
                  <Link
                    href="/about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
