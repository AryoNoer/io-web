import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
  svg?: React.ReactNode; // Use React.ReactNode for the svg prop
}

export default function Button(props: Props) {
  return (
    <div>
      <button
        className={`btn px-3 py-2 ${props.className}`}
        onClick={props.onClick}
      >
        {props.text}
        {props.svg}
      </button>
    </div>
  );
}
