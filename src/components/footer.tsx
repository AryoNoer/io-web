// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 px-8">
      <div className="container flex justify-between">
        <div>
          <p className="text-left text-white font-semibold">
            Made with Love by Aryo Noer 💛
          </p>
        </div>
        <div>
          <p className="text-white">copyright © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
