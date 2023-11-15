"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#">
                  <p className="text-gray-500 hover:text-gray-800">Home</p>
                </Link>
                <Link href="#">
                  <p className="text-gray-500 hover:text-gray-800">Blog</p>
                </Link>
                <Link href="#">
                  <p className="text-gray-500 hover:text-gray-800">Contact</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:33 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }} // Adjust the duration as needed
            className="md:hidden px-2 pt-2 pb-3 space-y-1"
          >
            <Link href="#">
              <p className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <Link href="#">
              <p className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Blog
              </p>
            </Link>
            <Link href="#">
              <p className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
