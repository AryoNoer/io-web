import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Hola() {
  useEffect(() => {
    // Ensure ScrollTrigger is attached to gsap
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = new ScrollTrigger({
      markers: false,
      toggleActions: "restart complete complete",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top center", // Adjust start position
        end: "bottom center", // Adjust end position
        scrub: true,
        markers: false,
      },
    });

    tl.fromTo(
      ".first",
      { y: "-50%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power3.out" } // Adjust easing
    )
      .fromTo(
        ".second",
        { y: "-50%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power3.out" } // Adjust easing
      )
      .fromTo(
        ".third",
        { y: "-50%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power3.out" } // Adjust easing
      )
      .fromTo(
        ".fourth",
        { y: "-50%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power3.out" } // Adjust easing
      )
      .fromTo(
        ".fifth",
        { y: "-50%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power3.out" } // Adjust easing
      );

    return () => {
      tl.kill();
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="container flex flex-col items-center md:mt-40">
      <div className="first mr-52 md:mr-[500px]">
        <Image
          src="/avatar.jpg"
          alt="First image"
          width={300}
          height={300}
          className="w-28 h-28 md:w-96 md:h-96 rounded-lg -rotate-6 shadow-2xl"
        />
      </div>
      <div className="second ml-52 md:ml-[500px]">
        <Image
          src="/avatar2.jpg"
          alt="Second image"
          width={300}
          height={300}
          className="w-28 h-28 md:w-96 md:h-96 rounded-lg rotate-6 shadow-2xl"
        />
      </div>
      <div className="third mr-52 md:mr-[500px]">
        <Image
          src="/avatar3.jpg"
          alt="Third image"
          width={300}
          height={300}
          className="w-28 h-28 md:w-96 md:h-96 rounded-lg rotate-6 shadow-2xl"
        />
      </div>
      <div className="fourth ml-52 md:ml-[500px]">
        <Image
          src="/avatar4.jpg"
          alt="Fourth image"
          width={300}
          height={300}
          className="w-28 h-28 md:w-96 md:h-96 rounded-lg -rotate-6 shadow-2xl"
        />
      </div>
      <div className="fifth mr-52 md:mr-[500px]">
        <Image
          src="/avatar5.jpg"
          alt="Fifth image"
          width={300}
          height={300}
          className="w-28 h-28 md:w-96 md:h-96 rounded-lg rotate-12 shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hola;
