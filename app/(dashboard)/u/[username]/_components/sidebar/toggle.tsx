"use client";

import React from 'react';
import {Hint} from "@/components/components/hint";
import {Button} from "@/components/ui/button";
import {ArrowLeftFromLine, ArrowRightFromLine} from "lucide-react";
import {useCreatorSidebar} from "@/store/useCreator-Sidebar";

const Toggle = () => {
    const {
        collapsed,
        onCollapse,
        onExpand,
    } = useCreatorSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";
    return (
        <>
            {collapsed && (
                <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            variant="ghost"
                            className="h-auto p-2 hover:bg-fifthColor/40"
                        >
                            <ArrowRightFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
                    <p className="font-semibold text-primary">
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

export default Toggle;