import React from 'react';
import {Logo} from "@/app/(browse)/_components/navbar/logo";
import Search from "@/app/(browse)/_components/navbar/search";
import Actions from "@/app/(browse)/_components/navbar/actions";

export const Navbar = () => {
    return (
        <div
            className="
               fixed top-0 w-full h-20 z-[49]
               px-4 lg:px-4 flex justify-between items-center shadow-sm
               gap-x-4 text-white bg-slate-100
            "
        >
            <Logo />
            <div
                className="
                    flex items-center gap-x-1
                "
            >
                <Search />
                <Actions />
            </div>
        </div>
    )
}
