"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/splashScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isHome]);
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Navbar />
              {children}
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
