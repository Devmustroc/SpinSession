import React, {FC} from 'react';
import { ReceivedChatMessage }from '@livekit/components-react';
import MessageChat from "@/components/components/stream-player/message-chat";
import {Skeleton} from "@/components/ui/skeleton";

interface ChatListingProps {
    messages: ReceivedChatMessage[];
    disabled: boolean;
}

const ChatListing: FC<ChatListingProps> = ({ messages, disabled}) => {
    if(disabled && !messages.length || !messages) {
        return (
            <div className="flex flex-1 items-center justify-center">
                <p className="text-sm text-muted-foreground">
                    {disabled ? "Chat is disabled" : "Welcome to the chat!"}
                </p>
            </div>
        )
    }
    return (
        <div className="flex flex-1 flex-col-reverse overflow-y-auto p-3 h-full bg-fifthColor">
        {messages.map((message) => (
                <MessageChat
                    key={message.timestamp}
                    data={message}
                />
            ))}
        </div>
    );
};

export default ChatListing;

export const skeleton = () => {
    return (
        <div
            className="flex flex-col items-center justify-center gap-y-4 p-3"
        >
            <Skeleton
                className="w-1/2 h-16"
            />
        </div>
    )
}