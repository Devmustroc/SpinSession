import React from 'react';
import {Logo} from "@/app/(dashboard)/u/[username]/_components/navbar/logo";
import Actions from "@/app/(dashboard)/u/[username]/_components/navbar/actions";
import TextNavBar from "@/app/(dashboard)/u/[username]/_components/navbar/text-navBar";

export const Navbar = () => {
    return (
        <div
            className="
                fixed top-0
                 w-full h-20
                 z-[49]
                 bg-slate-100
                 px-2 lg:px-4
                 flex
                 justify-between
                 items-center shadow-sm
            "
        >
            <Logo />
            <TextNavBar />
            <Actions />
        </div>
    )
}
