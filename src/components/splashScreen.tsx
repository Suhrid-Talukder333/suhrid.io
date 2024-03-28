'use client'
import React, { useEffect, useState } from "react"
import anime from 'animejs'
import Image from "next/image"

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            targets: '#logo',
            delay: 0,
            scale: 1,
            duration: 0,
            easing: 'easeInOutExpo',
        })
        loader.add({
            targets: '#logo',
            delay: 0,
            scale: 0.5,
            duration: 1000,
            easing: 'easeInOutExpo',
            opacity: 1,
        })
        loader.add({
            targets: '#logo',
            delay: 0,
            scale: 1,
            duration: 1000,
            easing: 'easeInOutExpo',
        })
        loader.add({
            targets: '#logo',
            delay: 0,
            scale: 0.5,
            duration: 1000,
            easing: 'easeInOutExpo',
        })
        loader.add({
            targets: '#logo',
            delay: 0,
            scale: 1,
            duration: 1000,
            easing: 'easeInOutExpo',
        })
    }
    useEffect(() => {
        animate()
    }, [])
    return (
        <div className="flex p-10 h-screen items-center justify-center bg-white dark:bg-black">
            <Image id="logo" className="opacity-0" src="/images/SuhridTalukderLogo.png" alt="SuhridTalukder" width={100} height={100} />
            <div className="absolute bottom-10 text-sm md:text-2xl text-center font-bold">Designed And Coded By <span className="whitespace-nowrap">Suhrid Talukder</span></div>
        </div>
    )
}