"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PROJECTS, ProjectType } from "@/constants/project";
import Image from "next/image";
export default function Contact() {
  const [hoveredItem, setHoveredItem] = useState<ProjectType | null>(null);
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
      <div className="w-full h-full p-10 mt-20 md:mt-40 flex justify-center items-center">
        <div className="w-full h-[70vh] relative z-[1000] md:p-10 flex flex-col md:flex justify-center items-center md:mt-5 md:mx-20 text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-gray-200">
          <div className="w-full">
            <div className="w-full my-5 pb-5 border-b-2">CONTACT</div>
            <div className="flex w-full justify-between">
              <div className="w-full mt-5 pb-5 text-xl flex-col justify-start items-center">
                <div className="py-5 flex justify-start items-center">MAIL</div>
                <div className="py-5 flex justify-start items-center">SOCIAL<br/>MEDIA</div>
              </div>
              <div className="w-full mt-5 pb-5 text-left text-xs md:text-lg flex-col justify-center items-center">
                <div className="py-6 flex justify-center items-center">suhridtalukder333@gmail.com</div>
                <div className="py-6 flex justify-center items-center">
                  <Link
                    className="flex text-lg w-fit md:mr-5"
                    href="https://www.linkedin.com/in/suhrid-talukder-333suhrid/"
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
                    <span className="ml-2 hover-this">LinkedIn</span>
                  </Link>
                  <Link
                    className="flex text-lg w-fit"
                    href="https://github.com/Suhrid-Talukder333"
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
                    <span className="ml-2 hover-this">Github</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block cursor"></div>
    </div>
  );
}
