import React from 'react';
import HeaderPage from "@/app/spins/_components/headerPage";
import Hero from "@/app/spins/_components/hero";
import Features from "@/app/spins/_components/features";
import Footer from "@/app/spins/_components/footer";

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