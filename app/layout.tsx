import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Main } from "next/document";


export const metadata: Metadata = {
  title: "project",
  description: "project ui/ux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>   
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
