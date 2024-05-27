import React, {FC} from 'react';
import {cn} from "@/lib/utils";
import {Radio} from "lucide-react";


interface LiveBadgeProps {
    className?: string;
}

const LiveBadge: FC<LiveBadgeProps> = ({className}) => {
    return (
        <div
            className={cn(
                "bg-sky-500 text-center p-0.5 px-1 rounded-md uppercase text-[8px] font-semibold tracking-wide",
                className
            )}
        >
            <div
                className="flex items-center justify-center gap-1"
            >
                Live
                <Radio className="w-3 h-3 animate-pulse text-black" />
            </div>
        </div>
    );
};


export default LiveBadge;