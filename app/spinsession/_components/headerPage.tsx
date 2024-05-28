import React from 'react';
import Link from "next/link";
import Image from "next/image";


const HeaderPage = () => {
    return (
            <header
                className="px-4 lg:px-6 h-14 flex items-center w-[80%] max-w-[1300px] mx-auto"
            >
                <Link
                    className="flex items-center justify-center"
                    href="/"
                >
                    <div
                        className="flex items-center bg-amber-700 p-2 rounded-full cursor-pointer"
                    >
                        <Image
                            src="/spooky.svg"
                            width={32}
                            height={32}
                            alt="Logo"
                        />
                    </div>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-in">
                        Sign In
                    </Link>
                </nav>
            </header>
    );
};

export default HeaderPage;