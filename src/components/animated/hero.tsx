import { motion } from "framer-motion";

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
      className="text-5xl text-light-1 font-satoshi font-medium"
    >
      <h1>aryonoer.</h1>
      <span className=" text-6xl text-light-2">
        i am a person who super interested in anything related to growing
      </span>
    </motion.div>
  );
};

export default Hero;
