import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex h-10 sticky z-50 top-8 bg-dark-2 bg-opacity-[30%] justify-center items-center w-80 md:w-96 mx-auto rounded-3xl backdrop-blur-SM shadow-md ">
      <div className="flex grid-cols-4 gap-5">
        <Link href="/">
          <p className="text-white font-semibold">About</p>
        </Link>
        <Link href="/">
          <p className="text-white font-semibold">Project</p>
        </Link>
        <Link href="/">
          <p className="text-white font-semibold">Hobby</p>
        </Link>
        <Link href="/">
          <p className="text-white font-semibold">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
