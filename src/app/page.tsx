"use client";

import Contact from "@/components/animated/contact";
import Projects from "@/components/animated/projects";
import Hero from "@/components/animated/hero";
import GiftIcon from "@/components/animated/hola";
import Desc from "@/components/animated/desc";
export default function Home() {
  return (
    <main className="">
      {/* section 1 */}
      <section
        id="header"
        className="w-[345px] md:w-[1068px] mx-auto bg-gradient-to-tr from-dark-1 to-dark-2 p-2 rounded-3xl mt-10"
      >
        <div id="hero" className="mb-5">
          <Hero />
        </div>
        <div id="desc" className="mb-5">
          <Desc />
        </div>
        <div id="contact" className="mb-5 md:my-12">
          <Contact />
        </div>
        <div id="icon" className="mb-5 md:my-5">
          <GiftIcon />
        </div>
      </section>
      {/* section 2 */}
      <section className="flex flex-col items-center justify-center mt-16">
        <div className="mb-5 md:my-5">
          <Projects />
        </div>
      </section>
    </main>
  );
}
