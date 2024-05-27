import React from 'react';
import {getSelf} from "@/lib/auth-service";
import {getStreamByUserId} from "@/lib/stream-service";
import ToggleCard from "@/app/(dashboard)/u/[username]/chat/_components/toggle-card";

const ChatPage = async () => {
    const user = await getSelf();
    const stream = await getStreamByUserId(user.id);

    if (!stream) throw new Error("Stream not found");


    return (
        <div
            className="p-6"
        >
            <div
                className="flex items-center justify-between m-4"
            >
                <h1
                    className="text-2xl font-bold"
                >
                    Chat Settings
                </h1>
            </div>
            <div
                className="space-y-4 pt-4"
            >
                <ToggleCard
                    field="isChatEnabled"
                    label="Enable Chat"
                    value={stream.isChatEnabled}
                />
                <ToggleCard
                    field="isChatDelayed"
                    label="Delay Chat"
                    value={stream.isChatDelayed}
                />
                <ToggleCard
                    field="isChatFollowersOnly"
                    label="Must be a follower to chat"
                    value={stream.isChatFollowersOnly}
                />
            </div>
        </div>
    );
};

export default ChatPage;