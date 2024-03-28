"use client"
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const link: any = document.querySelectorAll('.hover-this');
    const cursor: HTMLDivElement | null = document.querySelector('.cursor');

    const animateit = function (e: any) {
      if (e.type === "mouseleave") {
        if (cursor) {
          cursor.style.padding = "0.8rem";
          cursor.style.removeProperty("background-color");
        }
      } else {
        const target: HTMLElement = e.target as HTMLElement;
        if (target) {
          if (cursor) {
            cursor.style.padding = "1rem";
            cursor.style.backgroundColor = "#5f616554";
          }
        }
      }
    };

    const editCursor = (e: any) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.left = x -15+ 'px';
        cursor.style.top = y -15+ 'px';
      }
    };

    link.forEach((b: any) => b.addEventListener('mousemove', animateit));
    link.forEach((b: any) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
  }, []);
  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-full block dark:hidden particleWrapper">
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="w-full block dark:hidden" id="clouds">
        <div className="cloud x3"></div>
      </div>
      <div className="w-full hidden dark:block stars"></div>
      <div className="w-full hidden dark:block twinkling"></div>
      <div className="time-wrapper">
        <div className="block dark:hidden day"></div>
        <div className="hidden dark:block night">
          <div className="moon"></div>
          <div className="star star1 star-big"></div>
          <div className="star star2 star-big"></div>
          <div className="star star3 star-big"></div>
          <div className="star star4"></div>
          <div className="star star5"></div>
          <div className="star star6"></div>
          <div className="star star7"></div>
        </div>
      </div>
      <div className="p-10 w-full h-screen relative z-[1000] flex flex-col justify-center items-center text-center text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-blue-200">
        <div className="w-full hollow-text-white dark:hollow-text-black uppercase">
          Hello, I'm <span className="hover-this text-black dark:text-white whitespace-nowrap">Suhrid Talukder</span><br />a relentless dreamer
        </div>
        <div className="mt-3 w-full text-xl lg:text-2xl text-black dark:text-white">
          I'm a full stack developer with a front-end flair <br />& a mobile developer
        </div>
        <div className="w-1/2 md:w-1/2 mt-10 flex flex-col h-16 sm:flex-row justify-between items-center font-light text-sm lg:text-2xl text-black dark:text-white ">
          <Link href={"/projects"} className="w-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
            <span className="ml-2 hover-this">See My Projects</span></Link>
          <Link href={"/projects"} className="w-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
            <span className="ml-2 hover-this">More About Me</span></Link>
        </div>
        <div className="hidden lg:block cursor"></div>
      </div>
    </main>
  );
}
