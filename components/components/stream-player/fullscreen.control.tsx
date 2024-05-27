"use client";

import React, {FC} from 'react';
import {Maximize, Minimize} from "lucide-react";
import {Hint} from "@/components/components/hint";
interface FullscreenControlProps {
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
}

const FullscreenControl: FC<FullscreenControlProps> = ({ isFullscreen, onToggleFullscreen }) => {
    const Icon = isFullscreen ? Minimize : Maximize;
    const label = isFullscreen ? 'Exit Full Screen ' : 'Full Screen';
    return (
        <div
            className="flex items-center justify-center gap-4"
        >
            <Hint
                label={label}
                asChild
            >
                <button
                    onClick={onToggleFullscreen}
                    className="text-white p-1.5 hover:bg-white/10 rounded-md transition-colors duration-200 ease-in-out"
                >
                    <Icon
                        className="h-5 w-5"

                    />
                </button>
            </Hint>
        </div>
    );
};

export default FullscreenControl;



