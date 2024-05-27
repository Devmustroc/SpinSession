import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import {cn} from "@/lib/utils";

interface HintProps {
    label: string;
    className?: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
}

export const Hint = ({
                         label,
                         children,
                         asChild,
                         side,
                         className,
                         align,
    }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className={cn("text-white rounded-lg shadow-md p-2 bg-fifthColor", className)}
                    side={side}
                    align={align}
                >
                    <p className="font-semibold text-balck">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};