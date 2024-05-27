"use client";

import React from 'react';
import {useSidebar} from "@/store/use-sidebar";
import {Button} from "@/components/ui/button";
import {ArrowLeftFromLine,  ArrowRightFromLine} from "lucide-react";
import {Hint} from "@/components/components/hint";
import {Skeleton} from "@/components/ui/skeleton";


const Toggle = () => {
    const {
        collapsed,
        onCollapse,
        onExpand,
    } = useSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";
    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4 transition-all duration-300 ease-in-out text-fifthColor">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            variant="ghost"
                            className="h-auto p-2 hover:bg-amber-700"
                        >
                            <ArrowRightFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full transition-all duration-300 ease-in-out text-fifthColor">
                    <p className="font-semibold">
                        For you
                    </p>
                    <Hint label={label} side="right" asChild >
                        <Button
                            onClick={onCollapse}
                            className="h-auto p-2 ml-auto hover:bg-amber-700/40"
                            variant="ghost"
                        >
                            <ArrowLeftFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    );
};

export const ToggleSkeleton = () => {
    return (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-6 w-6" />
        </div>
    );
};

export default Toggle;