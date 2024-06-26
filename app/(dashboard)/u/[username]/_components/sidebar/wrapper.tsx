"use client"

import React from 'react';
import {cn} from "@/lib/utils";
import {useCreatorSidebar} from "@/store/useCreator-Sidebar";

interface WrapperProps {
    children : React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
    const { collapsed } = useCreatorSidebar((state) => state);
    return (
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-slate-100 border-r border-[#2D2E35] z-50 mt-4",
                collapsed && "lg:w-[70px]"
            )}>
                {children}
        </aside>

    );
};

export default Wrapper;