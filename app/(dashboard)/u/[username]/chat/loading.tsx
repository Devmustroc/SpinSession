import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";
import ToggleCard, {ToggleCardSkeleton} from "@/app/(dashboard)/u/[username]/chat/_components/toggle-card";


const ChatLoading = () => {
    return (
        <div
            className="p-6 space-y-4"
        >
            <Skeleton
                className="h-1/2 w-[200px]"
            />
            <div
                className="space-y-4"
            >
                <ToggleCardSkeleton />
                <ToggleCardSkeleton />
                <ToggleCardSkeleton />
            </div>
        </div>
    );
};

export default ChatLoading;