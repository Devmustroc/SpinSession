"use client";

import React, {FC, useEffect, useMemo, useState} from 'react';
import {useMediaQuery} from "usehooks-ts";
import {ChatVariant, useChatSidebar} from "@/store/use-chat-sidebar";
import {useChat, useConnectionState, useRemoteParticipant} from "@livekit/components-react";
import {ConnectionState} from "livekit-client";
import ChatHeader, {ChatHeaderSkeleton} from "@/components/components/stream-player/chat-header";
import {ChatForm, ChatFormSkeleton} from "@/components/components/stream-player/chat-form";
import ChatListing from "@/components/components/stream-player/chat-listing";
import ChatCommunity from "@/components/components/stream-player/chat-community";

interface ChatProps {
    hostId: string;
    viewerName: string;
    hostname: string;
    isFollowing: boolean;
    isChatEnabled: boolean;
    isChatDelayed: boolean;
    isChatFollowersOnly: boolean;
}

const Chat: FC<ChatProps> = ({
    hostId,
    hostname,
    isFollowing,
    isChatEnabled,
    isChatDelayed,
    isChatFollowersOnly,
    viewerName
    }) => {
    const matches = useMediaQuery('(max-width: 1024px)');
    const { variant, onExpand } = useChatSidebar((state) => state);
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(hostId);

    const isOnline = participant && connectionState === ConnectionState.Connected

    const isHidden = !isChatEnabled || !isOnline;

    const [value, setValue] = useState("");
    const { chatMessages: messages, send } = useChat();

    useEffect(() => {
        if (matches) {
            onExpand();
        }
    }, [matches, onExpand]);

    const reversedMessages = useMemo(() => {
        return messages.sort((a, b) => b.timestamp - a.timestamp);
    }, [messages]);

    const onSubmit = () => {
        if (!send) return;

        send(value);
        setValue("");
    };

    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <div
            className="flex flex-col bg-slate-100 border-l border-b pt-4 h-full w-full"
        >
            <ChatHeader />
            { variant === ChatVariant.CHAT && (
                <>
                    <ChatListing
                        messages={reversedMessages}
                        disabled={isHidden}
                    />
                    <ChatForm
                        onSubmit={onSubmit}
                        value={value}
                        onChange={onChange}
                        isHidden={isHidden}
                        isFollowersOnly={isChatFollowersOnly}
                        isFollowing={isFollowing}
                        isDelayed={isChatDelayed}
                    />
                </>
            )}
            {
                variant === ChatVariant.COMMUNITY && (
                    <ChatCommunity
                        viewerName={viewerName}
                        hostname={hostname}
                        isHidden={isHidden}
                    />
                )
            }
        </div>
    );
};

export default Chat;

export const ChatSkeleton = () => {
    return (
        <div
            className="flex flex-col border-l border-b pt-0 h-[calc(100vh-4rem)] w-full bg-gradient-to-tr from-amber-700/50 to-primary-background"
        >
            <ChatHeaderSkeleton />
            <ChatSkeleton />
            <ChatFormSkeleton />
        </div>
    )
}