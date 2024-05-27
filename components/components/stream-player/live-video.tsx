"use client";

import React, {FC, useEffect, useRef, useState} from 'react';
import {Participant, Track} from "livekit-client";
import { useTracks } from "@livekit/components-react";
import FullscreenControl from "@/components/components/stream-player/fullscreen.control";
import {useEventListener} from "usehooks-ts";
import VolumControl from "@/components/components/stream-player/volum-control";
import {toast} from "sonner";

interface LiveVideoProps {
    participant: Participant
}

const LiveVideo: FC<LiveVideoProps> = ({ participant }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [volume, setVolume] = useState(0);

    const onVolumeChange = (volume: number) => {
        setVolume(+volume);
        if (videoRef?.current) {
            videoRef.current.volume = +volume * 0.01;
            videoRef.current.muted = volume === 0;
        }
    }

    const toggleMute = () => {
        const newVolume = volume === 0 ? 100 : 0;
        onVolumeChange(newVolume);

        if (videoRef?.current) {
            videoRef.current.muted = !newVolume;
            videoRef.current.volume = newVolume ? 1 : 0;
        }
    }

    const toggleFullscreen = () => {
        if (isFullScreen) {
            document.exitFullscreen().then(r =>  {
                toast.success("Exited fullscreen");
            }).catch(e => {
                toast.error("Failed to exit fullscreen");
            });
        } else if(wrapperRef.current) {
            wrapperRef.current.requestFullscreen().then(r => console.log(r)).catch(e => console.error(e));
        }
    }

    const handleFullScreenChange = () => {
        const isCurrFullScreen = document.fullscreenElement !== null;
        setIsFullScreen(isCurrFullScreen);
    }


    useEventListener("fullscreenchange", handleFullScreenChange, wrapperRef);

    useEffect(() => {
       onVolumeChange(0);
    }, []);

    useTracks([Track.Source.Camera, Track.Source.Microphone]).filter(t => t.participant.identity === participant.identity)
        .forEach(track => {
            if (videoRef.current) {
                track.publication.track?.attach(videoRef.current);
            }
        });
    return (
        <div
            ref={wrapperRef}
            className="relative h-full flex"
        >
            <video
                ref={videoRef}
                width='100%'
            />
            <div
                className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
                <div
                    className="absolute bottom-0 flex h-14 w-full items-center justify-between p-4 bg-gradient-to-r from-amber-700/10 to-amber-500/20 backdrop-blur-sm"
                >
                    <FullscreenControl isFullscreen={isFullScreen} onToggleFullscreen={toggleFullscreen} />
                    <VolumControl onToggleMute={toggleMute} onChangeVolume={onVolumeChange} value={volume} />
                </div>
            </div>
        </div>
    );
};

export default LiveVideo;