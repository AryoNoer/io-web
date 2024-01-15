import React from "react";
import Image from "next/image";
function Desc() {
  return (
    <div className="flex flex-col my-4 ml-2">
      <div className="w-full">
        <div className="">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            I&apos;m a guy who&apos;s interested in diving into the
            <span className="text-3xl md:text-5xl"> backend</span>
          </h1>
          <h1 className="text-white text-base md:text-3xl font-semibold mt-2">
            with
            <span className="text-2xl md:text-5xl text-light-2">
              {" "}
              Node.js
            </span>{" "}
            and{" "}
            <span className="text-2xl md:text-5xl text-light-2">
              {" "}
              Typescript
            </span>
          </h1>
        </div>

        <div className="mt-10">
          <h1 className="text-dark-3 text-2xl font-normal md:mr-96">
            Currently, I am focusing on{" "}
            <span className="text-light-2">cloud</span> &{" "}
            <span className="text-light-2">backend</span> and I am also familiar
            with <span className="text-light-2">UI/UX</span> Design and{" "}
            <span className="text-light-2">web development</span>, but I dare to
            get out of my comfort zone so I can grow and add my experience in
            the future so that I can continue to grow and improve myself.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Desc;
