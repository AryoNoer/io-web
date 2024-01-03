import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  const headingVariants = {
    hidden: {
      y: 50, // Geser elemen ke bawah
      opacity: 0, // Setel elemen menjadi tidak terlihat
    },
    visible: {
      y: 0, // Kembalikan elemen ke posisi awal
      opacity: 1, // Munculkan elemen
      transition: {
        duration: 0.4, // Durasi animasi
        ease: "easeOut", // Fungsi animasi
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      className="flex flex-col md:flex-row"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="mb-2 md:mb-0"
      >
        <Image
          src="/avatar.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="w-20 h-20 md:w-64 md:h-64 border-2 border-solid border-light-2 rounded-full"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="flex flex-col my-2 md:mx-auto justify-center"
      >
        <div className="flex items-center gap-4 mt-2">
          <h1 className="text-2xl md:text-6xl font-semibold text-white">
            <span className="text-5xl md:text-8xl">Folla !</span> I’am Aryo
          </h1>
          <Image
            src="/Victory Hand.png"
            alt="Profile"
            width={32}
            height={32}
            className=""
          />
        </div>
        <div className="flex items-center gap-4 my-2">
          <div className="flex grid-rows-3 items-center gap-2 ">
            <h1 className="text-sm md:text-2xl font-medium text-white">
              Fun boys |
            </h1>
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-sm md:text-2xl font-medium text-white">
              Dedicade coder |
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm md:text-2xl font-medium text-white">
              Abstract
            </h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
