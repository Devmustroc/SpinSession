'use client';

import React, {FC, useTransition} from 'react';
import {Button} from "@/components/ui/button";
import {useAuth} from "@clerk/nextjs";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {onFollow, onUnfollow} from "@/actions/follow";
import {toast} from "sonner";
import {Skeleton} from "@/components/ui/skeleton";

interface ActionsLiveProps {
    isFollowing: boolean;
    isHost: boolean;
    hostIdentity: string;
}

const ActionsLive: FC<ActionsLiveProps> =({
    isFollowing,
    isHost,
    hostIdentity,
}) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { userId } = useAuth();

    const handleFollow = () => {
        startTransition(() => {
            onFollow(hostIdentity)
                .then((data) => toast.success(`You are now following ${data?.following.username}`))
                .catch(() => toast.error("Something went wrong"))
        });
    }

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(hostIdentity)
                .then((data) => toast.success(`You have unfollowed ${data?.following.username}`))
                .catch(() => toast.error("Something went wrong"))
        });
    }

    const toggleFollow =  () => {
        if (!userId) {
            return router.push("/sign-in");
        }

        if (isHost) return;

        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    }
    return (
        <Button
            disabled={isPending || isHost}
            onClick={toggleFollow}
            variant="primary"
            size="sm"
            className="w-full lg:w-auto"
        >
            <Heart className={cn(
                "h-4 w-4 mr-2",
                isFollowing
                    ? "fill-white"
                    : "fill-none"
            )} />
            {isFollowing
                ? "Unfollow"
                : "Follow"
            }
        </Button>
    );
};

export default ActionsLive;

export const ActionsSkeleton = () => {
    return (
        <Skeleton className="h-10 w-full lg:w-24" />
    );
};

