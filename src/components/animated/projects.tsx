import Image from "next/image";
import ProjectCard from "./projectcards";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Bem Fikti Website",
      imageUrl: "/fikti-app.png",
      description: "This is website for Information System Gunadarma University",
      URL: "https://fikti-app.vercel.app/",
    },
    {
      title: "UI Design Follas App",
      imageUrl: "/project1.png",
      description: "Designing UI Follas App for Follas Cafe",
      URL: "https://www.figma.com/file/xBhDUcaE6rd22odgIDzz0b/PI-FOLLAS?type=design&node-id=498%3A248&mode=design&t=ee0j8wjnWU2y4rdt-1",
    },
    // {
    //   title: "Project 3",
    //   imageUrl: "/project1.png",
    //   description: "This is project 3 description",
    //   URL: "https://github.com/aryonoer",
    // },
    // {
    //   title: "Project 4",
    //   imageUrl: "/project1.png",
    //   description: "This is project 4 description",
    //   URL: "https://github.com/aryonoer",
    // },
    // {
    //   title: "Project 5",
    //   imageUrl: "/project1.png",
    //   description: "This is project 5 description",
    //   URL: "https://github.com/aryonoer",
    // },
    // {
    //   title: "Project 6",
    //   imageUrl: "/project1.png",
    //   description: "This is project 6 description",
    //   URL: "https://github.com/aryonoer",
    // },
    // Tambahkan project lainnya jika diperlukan
  ];

  return (
    <div id="projects" className="container mx-auto">
      <div className="text-5xl text-light-1 font-satoshi font-medium mb-10">
        <figure className="float-left">
          <Image
            src="/Parachute.png"
            alt="Gift"
            className="shadow-xl mr-4"
            width={50}
            height={50}
          />
        </figure>
        <h1 className="md:text-5xl">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
