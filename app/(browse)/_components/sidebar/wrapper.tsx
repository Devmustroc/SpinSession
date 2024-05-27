'use client';

import React, { FC } from 'react';
import {useSidebar} from "@/store/use-sidebar";
import {cn} from "@/lib/utils";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
    const { collapsed } = useSidebar((state) => state);
    return (
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-64 h-full z-50 shadow-md transition-all duration-300 ease-in-out border-r border-white bg-slate-100",
                collapsed && "w-16  overflow-y-auto transition-all duration-300 ease-in-out text-start bg-slate-100"
            )}
        >
            { children }
        </aside>
    );
};

export default Wrapper;