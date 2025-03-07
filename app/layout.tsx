import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans", // Ensures CSS variable is set
  display: "swap", // Improves font loading
});


export const metadata: Metadata = {
  title: "CineGasm",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
