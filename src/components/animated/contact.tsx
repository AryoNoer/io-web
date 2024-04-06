import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="flex my-10 ml-2 items-center gap-4">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-light-1 p-2 rounded-full hover:scale-75 duration-300"
      >
        <Image src="./github.svg" alt="Github" width={30} height={30} />
      </a>
      <a
        href="https://www.instagram.com/aryonoer/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-light-1 p-2 rounded-full hover:scale-75 duration-300"
      >
        <Image src="./instagram.svg" alt="instagram" width={30} height={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/aryonoer/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-light-1 p-2 rounded-full hover:scale-75 duration-300"
      >
        <Image src="./linkedin.svg" alt="linkedin" width={30} height={30} />
      </a>
      <a
        href="mailto:aryojembaranmnoer@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-light-1 p-2 rounded-full hover:scale-75 duration-300"
      >
        <Image
          src="./gmail.svg"
          alt="gmail"
          width={30}
          height={30}
          style={{ fill: "#EA4335" }}
        />
      </a>
    </div>
  );
};

export default Contact;
