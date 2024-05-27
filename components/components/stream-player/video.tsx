"use client";


import React, {FC} from 'react';
import {useConnectionState, useRemoteParticipant, useTracks} from "@livekit/components-react";
import {ConnectionState, Track} from "livekit-client";
import OfflineVideo from "@/components/components/stream-player/offline-video";
import LoadingVideo from "@/components/components/stream-player/loading-video";
import LiveVideo from "@/components/components/stream-player/live-video";
import {Skeleton} from "@/components/ui/skeleton";


interface VideoProps {
    hostname: string;
    identity: string;
}

const Video: FC<VideoProps> = ({ hostname, identity}) => {
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(identity);
    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone
    ]).filter(t => t.participant.identity === identity);

    let content;

    if (!participant &&  connectionState === ConnectionState.Connected) {
        content = (
            <OfflineVideo username={hostname}/>
        );
    } else if (!participant || tracks.length === 0) {
        content = (
            <LoadingVideo label={ connectionState } />
        );
    } else {
        content = (
            <LiveVideo participant={participant} />
        );

    }
    return (
        <div className="aspect-video border-b group relative mt-4">
            {content}
        </div>
    );
};

export default Video;

export const VideoSkeleton = () => {
    return (
        <div className="aspect-video border-x border-background">
            <Skeleton className="h-full w-full rounded-none" />
        </div>
    );
};
