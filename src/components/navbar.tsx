"use client";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname()
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(false);
  }, [pathname])
  return (
    <nav className="w-full top-5 lg:top-[8rem] fixed z-[1001] flex justify-between items-center">
      <Link href="/" className="text-sm md:text-5xl ml-5 lg:ml-[8rem]">
        <Image
          src="/images/SuhridTalukderLogo.png"
          alt="SuhridTalukder"
          width={60}
          height={60}
        />
      </Link>
      <div className="text-sm md:text-5xl mr-5 lg:mr-[8rem] flex justify-center items-center">
        <ThemeSwitcher />
        <button
          type="button"
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="" style={{ display: showNavbar ? "flex" : "none" }}>
          <ul className="absolute right-[5%] font-medium flex flex-col p-4 mt-6 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${pathname=="/" ? 'text-white': "text-gray-900"}  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 ${pathname=="/about" ? 'text-white': "text-gray-900"}  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block py-2 px-3 ${pathname=="/projects" ? 'text-white': "text-gray-900"}  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 ${pathname=="/contact" ? 'text-white': "text-gray-900"}  rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
