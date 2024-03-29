"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PROJECTS, ProjectType } from "@/constants/project";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const path = usePathname();
  const id = path.split("/projects/")[1];
  const [project, setProject] = useState<ProjectType | null>(null);
  console.log(project);
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
  useEffect(() => {
    if (id) {
      PROJECTS.forEach((item: any) => {
        if (item.id.toLowerCase() === id.toLowerCase()) {
          setProject(item);
        }
      });
    }
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
      <div className="w-full lg:overflow-scroll z-[1000] p-10 mt-20 md:mt-0 flex justify-center items-center">
        <div className="w-full md:w-1/2 h-[70vh] lg:h-[85vh] relative z-[1000] md:p-10 flex flex-col md:mt-30 text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-gray-400">
          <Image
            className="rounded-xl"
            src={project?.img || ""}
            alt={project?.title || ""}
            width={1000}
            height={1000}
          />
          <span className="border-b-2 mt-10 pb-5 text-4xl">
            {project?.title}
          </span>
          <div className="mt-5 flex w-full justify-center items-center">
            <div className="flex w-full jutify-center items-center">
              <span className="text-xl font-bold dark:text-gray-400">
                Category
              </span>
            </div>
            <div className="flex w-full jutify-center items-center">
              <span className="text-sm font-bold dark:text-white">
                {project?.category}
              </span>
            </div>
          </div>
          <div className="mt-5 flex w-full justify-center items-center">
            <div className="flex w-full jutify-center items-center">
              <span className="text-xl font-bold dark:text-gray-400">Year</span>
            </div>
            <div className="flex w-full jutify-center items-center">
              <span className="text-sm font-bold dark:text-white text-justify">
                {project?.year}
              </span>
            </div>
          </div>
          <span className="mt-5 text-sm font-bold dark:text-white">
            {project?.desc}
          </span>
          <div className="mt-5 flex w-full justify-center items-center">
            <div className="flex w-full jutify-center items-center">
              <Link className="flex text-sm justify-center items-center" href="/projects/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                <span className="ml-2 hover-this">Back</span>
              </Link>
            </div>
            <div className="flex w-full jutify-center items-center">
              <Link
                className="flex text-sm"
                href="https://suhrid-invoice.netlify.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <span className="ml-2 hover-this">View The Website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block cursor"></div>
    </div>
  );
}
