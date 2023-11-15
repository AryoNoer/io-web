import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "../font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "aryonoer",
  description: "by.iO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
