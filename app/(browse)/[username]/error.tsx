'use client';


import React from 'react';
import Link from "next/link";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 text-center">
            <div className="max-w-md space-y-4">
                <TriangleAlertIcon className="mx-auto h-12 w-12 text-red-500"/>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-fourthColor">Oops, something went wrong!</h1>
                <p className="text-white dark:text-gray-200">
                    We&apos;re sorry, but the page you were trying to access is not available. Please try again later or
                    navigate back
                    to the homepage.
                </p>
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-fourthColor px-6 text-sm font-medium text-fifthColor shadow transition-colors hover:bg-fifthColor/80 hover:text-fourthColor focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-fourthColor dark:text-fifthColor dark:hover:bg-fourthColor dark:hover:text-fifthColor dark:focus-visible:ring-gray-300"
                    href="/"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;


function TriangleAlertIcon({ ...props }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}