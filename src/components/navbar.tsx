"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" md:shadow-sm shadow-teal-300 sticky top-0 md:top-4 z-[1000]">
      <div className=" md:bg-gradient-to-r from-dark-1 to-dark-2 rounded-full md:mr-32 md:ml-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#">
                  <p className="text-light-1 font-bold hover:text-light-2">
                    Home
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-light-1 font-bold hover:text-light-2">
                    Blog
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-light-1 font-bold hover:text-light-2">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-light-1 rounded-full p-2 inline-flex items-center justify-center text-dark-2 hover:text-dark-2 hover:bg-gray-100 focus:33 outline-none focus:ring-2 focus:ring-inset focus:ring-light-2"
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
            transition={{ duration: 0.1 }}
            className="md:hidden px-2 pt-2 pb-3 space-y-1 flex flex-col items-end" // Updated class to flex and items-end
          >
            <Link href="#">
              <Image
                className="bg-light-1 p-3 mb-3 rounded-full"
                src="/House.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                className="bg-light-1 p-3 mb-3 rounded-full"
                src="/Newspaper.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                className="bg-light-1 p-3 mb-3 rounded-full"
                src="/E Mail.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
