import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../componets/header";
import Footer from "../componets/footer";
import { Poppins, DM_Serif_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--font-poppins",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"], // só existe peso 400 nessa fonte
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receitas",
  description: "Site de receitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} ${dmSerif.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
