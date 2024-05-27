import React, {FC} from 'react';
import {BadgeCheck, Check} from "lucide-react";
import {cn} from "@/lib/utils";

interface VerifiedMarkProps {
    className?: string;
}

const VerifiedMark: FC<VerifiedMarkProps> = ({ className }) => {
    return (
        <div
            className={cn(`
                flex items-center justify-center bg-transparent rounded-full
            `,
                className
            )}
        >
            <BadgeCheck
                className="text-sky-500 w-[25px]px] h-[25px]"
            />
        </div>
    );
};

export default VerifiedMark;