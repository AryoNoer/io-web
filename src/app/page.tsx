"use client";

import Contact from "@/components/animated/contact";
import Projects from "@/components/animated/projects";
import Hero from "@/components/animated/hero";
import GiftIcon from "@/components/animated/hola";
export default function Home() {
  return (
    <main className="flex px-4 flex-col items-center justify-center mt-16">
      {/* section 1 */}
      <section
        id="header"
        className="flex flex-col items-center justify-center"
      >
        <div id="hero" className="mb-5">
          <Hero />
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
