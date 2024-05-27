import React from 'react';
import Link from "next/link";

const NotFoundUser = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl text-fourthColor dark:text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">Oops! Page Not Found</h1>
                <p className="text-white md:text-xl dark:text-fourthColor">
                    The user that you are looking for does not exist.
                </p>
            </div>
            <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/"
            >
                Go Back
            </Link>
        </div>
    );
};


export default NotFoundUser;