import React, { FC } from 'react';
import {getUserByUsername} from "@/lib/user-service";
import {notFound} from "next/navigation";
import {isFollowingUser} from "@/lib/follow-service";
import Actions from "@/app/(browse)/[username]/_components/actions";
import {isBlockedByUser} from "@/lib/block-service";
import StreamPlayer from "@/components/components/stream-player";
import NotFoundUser from "@/app/(browse)/[username]/not-found";

interface UserPageProps {
    params: {
        username: string;
    };
}

const UserPage = async ({ params }: UserPageProps) => {
    const user = await getUserByUsername(params.username);
    if (!user) {
        notFound();
    }
    const isFollowing = await isFollowingUser(user.id)
    const isBlocked = await isBlockedByUser(user.id)

   if (!user || !user.stream) {
       notFound();
   }

   if (isBlocked) {
       notFound();
   }

    return (
        <StreamPlayer
            user={user}
            stream={user.stream}
            isFollowing={isFollowing}
        />
    );
};

export default UserPage;