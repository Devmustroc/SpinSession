"use client";

import React, {FC, useEffect} from 'react';
import {useMediaQuery} from "usehooks-ts";
import {cn} from "@/lib/utils";
import {useCreatorSidebar} from "@/store/useCreator-Sidebar";


interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps>= ({ children }) => {
    const matches = useMediaQuery("(max-width: 1024px)");
    const {
        collapsed,
        onCollapse,
        onExpand
    } = useCreatorSidebar((state) => state);


    useEffect(() => {
        if (matches) {
            onCollapse();
        } else {
            onExpand();
        }
    }, [matches, onCollapse, onExpand]);
    return (
        <div
            className={cn(
                "flex-1 bg-slate-100",
                collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60"
            )}
        >
            { children }
        </div>
    );
};

export default Container;