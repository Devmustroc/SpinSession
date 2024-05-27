'use client';

import React, {FC} from 'react';
import VerifiedMark from "@/components/components/verifiedMark";
import BioModal from "@/components/components/stream-player/bioModal";

interface AboutCardProps {
    hostName: string;
    hostIdentity: string;
    bio: string | null;
    viewerIdentity: string;
    followedByCount: number;
}

const AboutCard: FC<AboutCardProps> = ({
    hostName,
    hostIdentity,
    bio,
    viewerIdentity,
    followedByCount
}) => {
    const hostIsViewer = `host-${hostIdentity}`;
    const isHost = hostIsViewer === viewerIdentity;

    const followedByLabel = followedByCount === 1 ? "follower" : "followers";
    return (
        <div className="px-4">
            <div className="group rounded-xl  text-white bg-fifthColor p-6 lg:p-10 flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-2xl">
                        About {hostName}
                        <VerifiedMark/>
                    </div>
                    {
                        isHost && (
                            <BioModal initialValue={bio}/>
                        )
                    }
                </div>
                <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-fourthColor mr-1">
            {followedByCount} {" "}
          </span> {followedByLabel}
                </div>
                <p className="text-sm">
                    {bio || "This user prefers to keep an air of mystery about them."}
                </p>
            </div>
        </div>
    );
};

export default AboutCard;