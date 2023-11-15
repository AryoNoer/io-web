// components/Navbar.tsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const MobileMenuButton: React.FC = () => {
  return (
    <button className="md:hidden text-white focus:outline-none">
      {/* Add your mobile menu icon here */}
      <span>☰</span>
    </button>
  );
};
exports.default = MobileMenuButton;
