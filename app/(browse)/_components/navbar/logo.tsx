import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google"
import {cn} from "@/lib/utils";
import Link from "next/link";


const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const Logo = () =>  {
    return (
        <Link
            href="/"
        >
            <div
                className="flex items-center gap-x-4 hover:opacity-75 transition"
            >
                <div
                    className="rounded-full  p-2 mr-10 shrink-0 lg:mr-0 lg:shrink transition-all duration-500 ease-in-out bg-amber-700"
                >
                    <Image
                        src="/spooky.svg"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </div>
                <div
                    className={cn(font.className,
                        "hidden lg:block"
                    )}
                >
                    <p
                        className="text-lg font-semibold text-black"
                    >
                        Partifly
                    </p>
                    <p
                        className="text-sm font-light text-muted-foreground"
                    >
                            The best place to Stream Events
                    </p>
                </div>
            </div>
        </Link>
    )
}
