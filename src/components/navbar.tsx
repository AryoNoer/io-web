import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex h-10 sticky z-50 top-8 bg-dark-2 bg-opacity-[30%] justify-center items-center w-80 md:w-96 mx-auto rounded-3xl backdrop-blur-SM shadow-md">
      <div className="flex grid-cols-4 gap-5">
        <Link href="#header">
          <p className="text-white font-semibold">About</p>
        </Link>
        <Link href="#projects">
          <p className="text-white font-semibold">Projects</p>
        </Link>
        <Link href="#hobby">
          <p className="text-white font-semibold">Hobby</p>
        </Link>
        <Link href="#contact">
          <p className="text-white font-semibold">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
