'use client';

import React, {useEffect} from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google"
import {cn} from "@/lib/utils";
import gsap from "gsap";


const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const Logo = () =>  {
    useEffect(() => {
        gsap.fromTo("#g_container", {
            duration: 1,
            y: +100,
            opacity: 0,
            delay: 1,
            ease: "power4.out"
        }, {
                x: 0,
                y: 0,
                opacity: 1,
                delay: 0.5,
                ease: "power4.out",
        })
        gsap.fromTo(".g_logo", {
            duration: 1,
            y: +100,
            opacity: 0,
            delay: 1,
            ease: "power4.out"
        }, {
                x: 0,
                y: 0,
                opacity: 1,
                delay: 0.5,
                ease: "power4.out",
        })
        gsap.fromTo(".g_title", {
            duration: 1,
            y: +100,
            opacity: 0,
            delay: 1,
            ease: "power4.out"
        }, {
                x: 0,
                y: 0,
                opacity: 1,
                delay: 0.5,
                ease: "power4.out",
        })

    }, [])
    return (
        <div
            className="flex flex-col items-center gap-y-4"
        >
            <div
                id='g_container'
                className="opacity-0 p-4 rounded-lg bg-amber-700"
            >
                <Image
                    id="g_logo"
                    src="/spooky.svg"
                    alt="Streaming Service Logo"
                    width={50}
                    height={50}
                />
            </div>
            <div
                className={cn(
                    "flex flex-col items-center",
                    font.className
                )}
            >
                <p
                    className='g_title opacity-0 text-xl font-semibold text-white'
                >
                    Streaming Event
                </p>
                <p
                    className='g_title opacity-0 text-muted-foreground text-sm'
                >
                    The best place to stream your events
                </p>
            </div>
        </div>
    )
}
