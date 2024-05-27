"use client";

import {Stream, User} from '@prisma/client';
import React, {FC} from 'react';
import {useViewerToken} from "@/hooks/use-viewer-token";
import {LiveKitRoom} from "@livekit/components-react";
import Video from "@/components/components/stream-player/video";
import {useChatSidebar} from "@/store/use-chat-sidebar";
import {cn} from "@/lib/utils";
import Chat from "@/components/components/stream-player/chat";
import ChatToggle from "@/components/components/stream-player/chat-toggle";

interface StreamPlayerProps {
    user: User & { stream: Stream | null };
    stream: Stream;
    isFollowing: boolean;
}

const Index: FC<StreamPlayerProps> = ({
    user,
    stream,
    isFollowing
    }) => {
    const {name, token, identity} = useViewerToken(user.id);
    const { collapsed } = useChatSidebar((state) => state);


    if (!token || !identity || !name) {
        return (
            <div
                className="flex justify-center items-center h-full"
            >
                Cannot watch stream
            </div>
        )
    }
    return (
        <>
            {
                collapsed && (
                    <div
                        className="hidden lg:block fixed top-[100px] right-2 z-50"
                    >
                        <ChatToggle />
                    </div>
                )
            }
            <LiveKitRoom
                token={token}
                serverUrl={process.env.LIVEKIT_WS_URL}
                className={cn("grid grid-cols-1 lg:gap-y-1 lg:grid-cols-2 xl:grid-cols-7 2xl:grid-cols-7",
                    collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
                )}
            >
                <div
                    className="space-y-4 col-span-1 lg:col-span-4 xl:col-span-5 2xl:col-span-5 lg:overflow-y-auto"
                >
                    <Video
                        hostname={user.username}
                        identity={user.id}
                    />
                </div>
                <div
                    className={cn("col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2 lg:flex h-full w-full overflow-hidden",
                        collapsed ? "hidden" : ""
                    )}
                >
                    <Chat
                        viewerName={name}
                        hostname={user.username}
                        hostId={user.id}
                        isFollowing={isFollowing}
                        isChatEnabled={stream.isChatEnabled}
                        isChatDelayed={stream.isChatDelayed}
                        isChatFollowersOnly={stream.isChatFollowersOnly}
                    />
                </div>
            </LiveKitRoom>
        </>
    );
};

export default Index;