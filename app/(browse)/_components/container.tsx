'use client'

import { useEffect } from "react";
import { useMediaQuery} from "usehooks-ts";
import React, {FC} from 'react';
import {useSidebar} from "@/store/use-sidebar";
import {cn} from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps>= ({ children }) => {
    const matches = useMediaQuery("(max-width: 1024px)");
    const {
        collapsed,
        onCollapse,
        onExpand

    } = useSidebar((state) => state);


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
                "flex-1 h-full",
                collapsed ? "ml-[65px]" : "ml-[260px] transition-all duration-300 ease-in-out",
            )}
        >
            { children }
        </div>
    );
};

export default Container;