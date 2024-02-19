import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGooglecloud,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { id: 1, icon: <FaHtml5 />, name: "HTML5" },
  { id: 2, icon: <FaCss3 />, name: "CSS3" },
  { id: 3, icon: <SiTailwindcss />, name: "TailwindCss" },
  { id: 4, icon: <FaBootstrap />, name: "Bootsrap" },
  { id: 5, icon: <FaJs />, name: "JavaScript" },
  { id: 6, icon: <FaReact />, name: "React" },
  { id: 7, icon: <SiNextdotjs />, name: "Next.js" },
  { id: 8, icon: <SiTypescript />, name: "Typescript" },
  { id: 9, icon: <FaNodeJs />, name: "Node.js" },
  { id: 10, icon: <FaFigma />, name: "Figma" },
  { id: 11, icon: <SiGooglecloud />, name: "GCP" },
  { id: 12, icon: <SiFirebase />, name: "Firebase" },
];

const Skills: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });

    tl.fromTo(
      ".skill-item",
      { y: "-50%", opacity: 0, scale: 0.5 },
      {
        y: "0%",
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto mt-32 p-4 md:p-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-white text-center">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-2 md:gap-10">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center mb-4 sm:mb-0 skill-item"
          >
            <div className="bg-white p-4 rounded-lg mb-2 hover:scale-75 duration-300">
              <div className="text-2xl sm:text-4xl">{skill.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
