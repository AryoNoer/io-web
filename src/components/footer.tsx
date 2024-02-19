// components/Footer.tsx
"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 border-t-2 border-zinc-800">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-zinc-400 font-medium">
          Made With Love By Aryo Noer 💛 Copyright © {new Date().getFullYear()}
        </p>
        <div className="flex  space-x-3">
          <Button
            text="Github"
            onClick={() => window.open("https://github.com/aryonoer")}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            }
          />
          <Button
            text="Linkedin"
            onClick={() => window.open("https://linkedin.com/in/aryonoer")}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            }
          />
          <Button
            text="Instagram"
            onClick={() => window.open("https://instagram.com/aryonoer")}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
