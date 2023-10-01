import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarWithCTAButton from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get Booking!",
  description: "Get ready to get booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto border shadow rounded">
          <NavbarWithCTAButton />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
