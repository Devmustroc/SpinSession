"use client";

import React, {useTransition} from 'react';

import {Button} from "@/components/ui/button";
import {onFollow, onUnfollow} from "@/actions/follow";
import {toast} from "sonner";
import {onBlock, onUnblock} from "@/actions/block";


interface ActionsProps {
    isFollowing: boolean;
    userId: string;
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
    const [isPending, startTransition] = useTransition()
    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId)
                .then((data) => toast.success("You are now following this user ✅"))
                .catch((data) => toast.error("Failed to follow ❌"))
        });
    }
    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(userId)
                .then((data) => toast.success("You are now unfollowing this user ✅"))
                .catch((data) => toast.error("Failed to unfollow ❌"))
        });
    }

    const onClick = isFollowing ? handleUnfollow : handleFollow;

    const handleBlock = () => {
        startTransition(() => {
            onBlock(userId)
                .then((data) => {
                    if (data && data.blockedId) {
                        toast.success(`You have blocked this user ✅ ${data.blocked.username}`)
                    }
                })
                .catch((data) => {
                    if (data && data.blockedId) {
                        toast.error(`Failed to block ❌ ${data.blocked.username}`)
                    }
                })
        });
    }

    const handleUnblock = () => {
        startTransition(() => {
            onUnblock(userId)
                .then((data) => toast.success(`You have unblocked this user ✅ `))
                .catch((data) => toast.error(`Failed to unblock ❌ ${data.blocked.username}`))
        })
    }

    const onBlockClick = isFollowing ? handleUnblock : handleBlock;
    return (
        <>
            <Button
                disabled={isPending }
                onClick={onClick}
                variant="primary"
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
            <Button
                disabled={isPending }
                onClick={handleUnblock}
                variant="danger"
            >
                UnBlock
            </Button>
            <Button
                disabled={isPending }
                onClick={handleBlock}
                variant="danger"
            >
                Block
            </Button>
        </>

    );
};

export default Actions;