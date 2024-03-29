"use client";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/splashScreen";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isHome, isLoading]);
  return (
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
  );
}
