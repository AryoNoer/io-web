// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 justify-center items-center p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm text-white font-semibold text-center">
            Made With Love By Aryo Noer 💛
          </p>
        </div>
        <div>
          <p className="text-sm text-white font-normal text-center">
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
