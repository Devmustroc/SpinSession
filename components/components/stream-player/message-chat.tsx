'use client';

import React, {FC, useState} from 'react';
import { format } from 'date-fns';
import {ReceivedChatMessage} from "@livekit/components-react";
import {stringToColor} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

interface MessageChatProps {
    data: ReceivedChatMessage;
}

const MessageChat: FC<MessageChatProps>= ({ data }) => {
    const color = stringToColor(data.from?.identity || data.from?.name || "unknown");

    return (
        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
            <p className="text-sm text-amber-700 font-semibold py-1 px-2 rounded-full bg-fourthColor">
                {format(data.timestamp, "HH:MM")}
            </p>
            <div className="flex flex-wrap items-baseline gap-1 grow">
                <p className="text-sm font-semibold space-nowrap">
                      <span className="truncate" style={{color: color}}>
                        {data.from?.name}
                      </span>{" "}
                      <span
                         className="text-white"
                      >:</span>
                </p>
                <p className="text-sm break-all text-white">
                    {data.message}
                </p>
            </div>
        </div>
    );
};

export default MessageChat;


export const ChatSkeleton = () => {
    return (
        <div
            className="flex h-full items-center justify-center gap-y-4 p-3"
        >
            <Skeleton
                className="w-1/2 h-6"
            />
        </div>
    )
}