import Image from "next/image";

const ProjectCard: React.FC<{
  title: string;
  imageUrl: string;
  description: string;
}> = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-light-1 rounded-xl shadow-md overflow-hidden">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-light-2 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
