import React from 'react';
import HeaderPage from "@/app/spinsession/_components/header-page";
import Hero from "@/app/spinsession/_components/hero";
import Features from "@/app/spinsession/_components/features";
import Footer from "@/app/spinsession/_components/footer";

const Page = () => {
    return (
        <div
            className="flex flex-col min-h-[100vh] bg-gray-100 mx-auto dark:bg-gray-900"
        >
            <HeaderPage/>
            <main
                className="flex-1"
            >
                <Hero/>
                <Features />
            </main>
            <Footer />
        </div>
);
};

export default Page;