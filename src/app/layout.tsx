import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qtee.ai",
  description:
    "Your AI-driven Solution for Comprehensive Call Auditing:- Where advanced AI technology meets unparalleled customization in call auditing. our platform is meticulously engineered to ensure that every sales and support service call meets the highest standards of quality and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
