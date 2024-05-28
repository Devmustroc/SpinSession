import React from 'react';
import Link from "next/link";

const Features = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Make your turntables vibe
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your DJ Experience</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Spin Sessions DJ offers a live streaming platform designed to help DJs connect with their fans
                            Invite your audience to join you on your musical journey.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Live Streaming</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Broadcast your DJ sets to a global audience in real-time, creating an immersive experience
                            for your
                            fans.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Record all your Dj Set</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Record your DJ sets and save them for later viewing, allowing you to build an archive of your
                            performances.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Social Sharing</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Integrate your social media accounts and share your DJ sets with your followers, expanding
                            your reach
                            and engagement.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">
                            Invite Your Fans
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Invite your fans to join you on your musical journey, creating a unique and interactive
                            experience for
                            your audience.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md border border-amber-700 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="/sign-in"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Features;