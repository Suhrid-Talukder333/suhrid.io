"use client"
import Link from "next/link";
import { useEffect } from "react";
export default function Projects() {
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
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
            }
        };

        link.forEach((b: any) => b.addEventListener('mousemove', animateit));
        link.forEach((b: any) => b.addEventListener('mouseleave', animateit));
        window.addEventListener('mousemove', editCursor);
    }, []);
    return (
        <div className="w-full">
            <div className="w-full hidden dark:block stars"></div>
            <div className="w-full hidden dark:block twinkling"></div>
            <div className="w-full h-screen relative z-[1000] p-20 flex justify-center mt-40 text-center text-3xl lg:text-6xl font-bold text-[#0B6285] dark:text-blue-200">
                <div>Work</div>
                <div className="cursor"></div>
            </div>
        </div>
    );
}
