import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// Removed legacy LoadingSplash
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Greenbox | Education Pathway",
  description: "Study in Singapore, Malaysia & Germany with confidence. Free Eligibility Check + Personalized Admission Roadmap.",
  icons: {
    icon: "/greenbox-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-24 bg-[#0B0F1A]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
