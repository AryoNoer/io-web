import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard: React.FC<{
  title: string;
  imageUrl: string;
  description: string;
}> = ({ title, imageUrl, description }) => {
  return (
    <motion.div
      className="bg-light-1 rounded-xl shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-light-2 mb-4">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
