'use client';

import React from 'react';

import { Skeleton} from "@/components/ui/skeleton";
import ChatToggle from "@/components/components/stream-player/chat-toggle";
import VariantToggle from "@/components/components/stream-player/variant-toggle";
import {cn} from "@/lib/utils";


const ChatHeader = () => {
    return (
        <div className="relative p-3 border-b pb-7 ">
            <div className="absolute left-2 top-2 hidden lg:block">
                <ChatToggle/>
            </div>
            <p className="font-semibold text-center">
                Stream Chat
            </p>
            <div className="absolute right-2 top-2">
                <VariantToggle/>
            </div>
        </div>
    );
};

export const ChatHeaderSkeleton = () => {
    return (
        <div className="relative p-3 border-b hidden md:block">
            <Skeleton className="absolute h-6 w-6 left-3 top-3"/>
            <Skeleton className="w-28 h-6 mx-auto"/>
        </div>
    );
};

export default ChatHeader;