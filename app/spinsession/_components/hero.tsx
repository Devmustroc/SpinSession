import React from 'react';
import Link from "next/link";
import {WavyBackground} from "@/app/spinsession/_components/wavy-background";


const Hero = () => {
    return (
                <section className="pt-12 md:pt-24 lg:pt-32 border-y">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-amber-700">
                                    <span
                                        className="block text-gray-900 dark:text-gray-100"
                                    >
                                        Spins Session
                                    </span>
                                    Unleash Your DeeJay Skills to a Global Audience
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Spins Sessions DJ is the ultimate streaming platform for DJs to connect with their audience and showcase their
                                    talent. With powerful live streaming, you can
                                    take your DJ career to new heights.
                                </p>
                                <div className="space-x-4 mt-6">
                                    <Link
                                        className="inline-flex h-9 items-center
                                            justify-center rounded-md border border-amber-700
                                            bg-amber-700 px-4 py-2 text-sm font-medium shadow-sm transition-colors
                                            hover:bg-gray-100 hover:text-amber-700
                                            focus-visible:outline-none focus-visible:ring-1
                                            focus-visible:ring-gray-950 disabled:pointer-events-none
                                             disabled:opacity-50 dark:border-gray-800
                                             dark:bg-gray-950 dark:hover:bg-gray-800
                                             dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="/sign-in"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                                <video
                                    className="mx-auto  overflow-hidden rounded-md object-cover"
                                    height="300"
                                    width="1270"
                                    loop
                                    autoPlay
                                    playsInline
                                    muted
                                >
                                    <source src="/spinsessions.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Hero;