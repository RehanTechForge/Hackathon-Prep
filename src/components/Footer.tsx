import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Your Blog</h2>
            <p className="text-gray-300">
              Exploring ideas, sharing knowledge, and inspiring minds.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-gray-300">
                  All Posts
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/technology"
                  className="hover:text-gray-300"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/category/lifestyle"
                  className="hover:text-gray-300"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/category/travel" className="hover:text-gray-300">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/category/food" className="hover:text-gray-300">
                  Food
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Your Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
