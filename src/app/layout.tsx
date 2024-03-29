import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import App from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhrid Talukder",
  description: "The official Suhrid Talukder home page.",
  icons: {
    icon: "/images/SuhridTalukderLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
