"use client";

import {useRef, useState} from "react";

import { cn } from "@/lib/utils";
import Picker from "emoji-picker-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ChatTextInfo from "@/components/components/stream-player/chat-text-info";
import {Laugh} from "lucide-react";


interface ChatFormProps {
    onSubmit: () => void;
    value: string;
    onChange: (value: string) => void;
    isHidden: boolean;
    isFollowersOnly: boolean;
    isFollowing: boolean;
    isDelayed: boolean;
}

export const ChatForm = ({
                             onSubmit,
                             value,
                             onChange,
                             isHidden,
                             isFollowersOnly,
                             isFollowing,
                             isDelayed,
                         }: ChatFormProps) => {
    const [chosenEmoji, setChosenEmoji] = useState<any | null>(null);
    /*const [emojiPickerState, SetEmojiPicker] = useState(false);*/
    const [isDelayBlocked, setIsDelayBlocked] = useState(false);
    const emojiPickerRef = useRef<any | null>(null)

    const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing;
    const isDisabled = isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!value || isDisabled) return;

        if (isDelayed && !isDelayBlocked) {
            setIsDelayBlocked(true);
            setTimeout(() => {
                setIsDelayBlocked(false);
                onSubmit();
            }, 3000);
        } else {
            onSubmit();
        }
    }


    if (isHidden) {
        return null;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-y-4 p-3 bg-fifthColor"
        >
            <ChatTextInfo isDelayed={isDelayed} isFollowersOnly={isFollowersOnly}/>
            <div className="w-full">
                <Input
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    disabled={isDisabled}
                    placeholder="Send a message"
                    className={cn(
                        "border-white",
                        (isFollowersOnly || isDelayed) && "border-y-accent-foreground",
                    )}
                />
            </div>
            <div className="ml-auto">
                <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    disabled={isDisabled}
                    className="px-3 bg-black hover:bg-black/90"
                >
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export const ChatFormSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 p-3">
            <Skeleton className="w-full h-10"/>
            <div className="flex items-center gap-x-2 ml-auto">
                <Skeleton className="h-7 w-7"/>
                <Skeleton className="h-7 w-12"/>
            </div>
        </div>
    );
};