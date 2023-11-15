import { motion } from "framer-motion";
import Image from "next/image";

const socialIconsVariants = {
  hidden: {
    y: 50, // Geser elemen ke bawah
    opacity: 0, // Setel elemen menjadi tidak terlihat
  },
  visible: {
    y: 0, // Kembalikan elemen ke posisi awal
    opacity: 1, // Munculkan elemen
    transition: {
      duration: 0.6, // Durasi animasi
      ease: "easeOut", // Fungsi animasi
    },
  },
};

const Contact: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={socialIconsVariants}
      className="flex mr-28 md:mr-0 items-center my-5 md:my-10 gap-4"
    >
      <motion.a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="bg-light-1 p-2 rounded-full"
      >
        <Image src="./github.svg" alt="Github" width={30} height={30} />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="bg-light-1 p-2 rounded-full"
      >
        <Image src="./instagram.svg" alt="instagram" width={30} height={30} />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="bg-light-1 p-2 rounded-full"
      >
        <Image src="./linkedin.svg" alt="linkedin" width={30} height={30} />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="bg-light-1 p-2 rounded-full"
      >
        <Image
          src="./gmail.svg"
          alt="gmail"
          width={30}
          height={30}
          style={{ fill: "#EA4335" }}
        />
      </motion.a>
    </motion.div>
  );
};

export default Contact;
