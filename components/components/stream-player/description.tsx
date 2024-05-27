import React, {FC} from 'react';
import UserAvatar, {UserAvatarSkeleton} from "@/components/components/user-avatar";
import VerifiedMark from "@/components/components/verifiedMark";
import {useParticipants, useRemoteParticipant} from "@livekit/components-react";
import {UserIcon} from "lucide-react";
import ActionsLive, {ActionsSkeleton} from "@/components/components/stream-player/actionsLive";
import {Skeleton} from "@/components/ui/skeleton";

interface DescriptionProps {
    hostName: string;
    hostIdentity: string;
    viewerIdentity: string;
    imageUrl: string;
    isFollowing: boolean;
    name: string;
}

const Header: FC<DescriptionProps> = ({
    hostName,
    hostIdentity,
    viewerIdentity,
    imageUrl,
    isFollowing,
    name
    }) => {
    const participants = useParticipants()
    const participant = useRemoteParticipant(hostIdentity);



    const isLive = !!participant;

    const participantsCount = participants.length; - 1;

    const hostAsViewer = `host-${hostIdentity}`

    const isHost = viewerIdentity === hostAsViewer;
    return (
        <div
            className="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-start justify-between px-4"
        >
            <div className="flex items-center gap-x-4">
                <UserAvatar
                    image_url={imageUrl}
                    username={hostName}
                    size="lg"
                    isLive={isLive}
                    showBadge
                />
                <div className="py-2">
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold pr-2 uppercase">
                            {hostName}
                        </h2>
                        <VerifiedMark/>
                    </div>
                    <p className="text-sm font-semibold">
                        {name}
                    </p>
                    {isLive ? (
                        <div className="font-semibold flex gap-x-2 items-center justify-start text-xs text-rose-500">
                            <div
                                className="bg-fifthColor rounded-full"
                            >
                                <UserIcon className="h-4 w-4 text-white"/>
                            </div>
                            <p
                                className="text-sky-500"
                            >
                                {participantsCount} {participantsCount === 1 ? "viewer" : "viewers"}
                            </p>
                        </div>
                    ) : (
                        <p className="font-semibold text-xs text-muted-foreground">
                            Offline
                        </p>
                    )}
                </div>
            </div>
            <ActionsLive
                isFollowing={isFollowing}
                isHost={isHost}
                hostIdentity={hostIdentity}
            />
        </div>
    );
};

export default Header;

export const HeaderSkeleton = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
            <div className="flex items-center gap-x-2">
                <UserAvatarSkeleton size="lg" />
                <div className="space-y-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>
            <ActionsSkeleton />
        </div>
    );
};