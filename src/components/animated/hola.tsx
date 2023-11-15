import { motion } from "framer-motion";
import Image from "next/image";

const GiftIcon: React.FC = () => {
  const giftEmot = {
    hidden: {
      y: 100, // Geser elemen ke bawah
      opacity: 0, // Setel elemen menjadi tidak terlihat
    },
    visible: {
      y: 0, // Kembalikan elemen ke posisi awal
      opacity: 1, // Munculkan elemen
      transition: {
        duration: 0.8, // Durasi animasi
        ease: "easeOut", // Fungsi animasi
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover={{ rotate: 360 }} // Putar gambar sebesar 360 derajat saat dihover
      className="flex justify-center w-14 h-14"
      variants={giftEmot}
    >
      <Image
        src="/Last Quarter Moon.svg" // Ubah jalur gambar SVG dengan awalan '/'
        alt="Gift"
        className="w-full h-full shadow-xl"
        width={30}
        height={30}
      />
    </motion.div>
  );
};

export default GiftIcon;
