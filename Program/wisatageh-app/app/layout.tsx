import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/halaman_utama/Navbar";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300","400","500"] });

export const metadata: Metadata = {
  title: "WisataGeh",
  description: "Wisata seru di lampung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
