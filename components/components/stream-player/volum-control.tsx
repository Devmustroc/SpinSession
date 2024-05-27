'use client';

import React, {FC} from 'react';
import {Volume1, Volume2, VolumeX} from "lucide-react";
import {Hint} from "@/components/components/hint";
import {Slider} from "@/components/ui/slider";

interface VolumControlProps {
    onToggleMute: () => void;
    onChangeVolume: (volume: number) => void;
    value: number;
}

const VolumControl: FC<VolumControlProps> = ({
    onChangeVolume,
    onToggleMute,
    value
    }) => {
    const isMuted = value === 0;
    const isAboveHalf = value > 50;

    let Icon = Volume1;

    if (isMuted) {
        Icon = VolumeX;
    } else if (isAboveHalf) {
        Icon = Volume2;
    }

    const label = isMuted ? 'Unmute' : 'Mute';

    const handleChange = (value: number[]) => {
        onChangeVolume(value[0]);
    }
    return (
        <div
            className="flex items-center justify-center gap-4"
        >
            <Hint label={label} asChild>
                <button
                    onClick={onToggleMute}
                    className="text-white p-1.5 hover:bg-white/10 rounded-md transition-colors duration-200 ease-in-out"
                >
                    <Icon className="h-5 w-5" />
                </button>
            </Hint>
            <Slider
                className="w-[8rem] cursor-pointer"
                onValueChange={handleChange}
                value={[value]}
                max={100}
                step={1}
            />
        </div>
    );
};

export default VolumControl;