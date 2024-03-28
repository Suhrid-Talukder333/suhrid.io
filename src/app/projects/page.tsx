"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PROJECTS, Project } from "@/constants/project";
import Image from "next/image";
export default function Projects() {
  const [hoveredItem, setHoveredItem] = useState<Project | null>(null);
  useEffect(() => {
    const link: any = document.querySelectorAll(".hover-this");
    const cursor: HTMLDivElement | null = document.querySelector(".cursor");

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
        cursor.style.left = x - 15 + "px";
        cursor.style.top = y - 15 + "px";
      }
    };

    link.forEach((b: any) => b.addEventListener("mousemove", animateit));
    link.forEach((b: any) => b.addEventListener("mouseleave", animateit));
    window.addEventListener("mousemove", editCursor);
  }, []);
  return (
    <div className="w-full">
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
      <div className="w-full hidden dark:block stars"></div>
      <div className="w-full hidden dark:block twinkling"></div>
      <div className="w-full h-full p-10 mt-40 flex justify-center items-center">
        <div className="w-full md:w-1/2 h-[70vh] relative z-[1000] md:p-10 flex flex-col mt-10 md:mt-30 text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-blue-200">
          <div className="w-full flex justify-between items-center mb-5 border-b-4">
            <div className="">Work</div>
            <div>{PROJECTS.length}</div>
          </div>
          <div className="project-container w-full overflow-scroll overflow-x-hidden flex flex-col text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-blue-200">
            {PROJECTS.map((item: Project, index: number) => (
              <Link
                href={`/projects/${item.id}`}
                onMouseEnter={() => setHoveredItem(item)}
                id={`${index}`}
                className="w-full flex items-center hover:ml-10"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden w-1/2 h-full relative z-[1000] p-20 lg:flex flex-col mt-10 text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-blue-200">
          {hoveredItem && (
            <Image
              src={hoveredItem?.img || ""}
              alt={hoveredItem?.title || ""}
              width={1000}
              height={1000}
            />
          )}
        </div>
      </div>
      <div className="hidden lg:block cursor"></div>
    </div>
  );
}
