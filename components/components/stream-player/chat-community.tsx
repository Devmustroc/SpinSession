'use client';

import React, {FC, useMemo, useState} from 'react';
import {useParticipants} from "@livekit/components-react";
import {useDebounceValue} from "usehooks-ts";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import CommunityItem from "@/components/components/stream-player/community-item";
import {LocalParticipant, RemoteParticipant} from "livekit-client";

interface ChatCommunityProps {
    hostname: string;
    viewerName: string;
    isHidden: boolean;
}

const ChatCommunity: FC<ChatCommunityProps> = ({
    hostname,
    viewerName,
    isHidden ,
    }) => {
    const [value, setValue] = useState("");
    const participants = useParticipants()
    const debouncedValue = useDebounceValue<string>(value, 500);

    const onChange = (newVal: string) => {
        setValue(newVal)
    };

    const filteredParticipants = useMemo(() => {
        const deduped = participants.reduce((acc, participant) => {
            const hostViewer = `host-${participant.identity}`
            if (!acc.some((p) => p.identity === hostViewer)) {
                acc.push(participant)
            }
            return acc
        }, [] as (RemoteParticipant | LocalParticipant)[])
        return deduped.filter((participant) => {
            return participant.name?.toLocaleLowerCase().includes(debouncedValue[0].toLowerCase())
        })
        }, [participants, debouncedValue] );

    if (isHidden) {
        return (
            <div
                className="flex flex-1 items-center justify-center"
            >
                <p
                    className="text-white text-sm"
                >
                    Community is Disabled
                </p>
            </div>
        )
    }
    return (
        <div
            className="p-4 w-full h-full bg-fifthColor flex flex-col gap-y-4 px-2"
        >
            <Input
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search in your community"
            />
            <ScrollArea
                className="gap-y-2 mt-4"
            >
                <p
                    className="text-center text-sm text-white bg-foreground hidden last:block p-2"
                >
                    No results
                </p>
                {
                    participants.map((participant) => {
                        return (
                            <CommunityItem
                                key={participant.identity}
                                hostName={hostname}
                                viewerName={viewerName}
                                participantName={participant.name}
                                participantIdentity={participant.identity}
                            />
                        )
                    })
                }
            </ScrollArea>
        </div>
    );
};

export default ChatCommunity;