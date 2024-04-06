import Image from "next/image";
import Button from "../Button";

interface Props {
  title: string;
  imageUrl: string;
  description: string;
  URL: string;
}

export default function ProjectCard(props: Props) {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={props.imageUrl}
          width={300}
          height={200}
          className="w-full bg-center"
          alt={props.title}
        />
      </figure>
      <div className="card-body bg-transparent">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <Button
            text="See now!"
            onClick={() => window.open(`${props.URL}`)}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
