import React, {FC} from 'react';
import {WifiOffIcon} from "lucide-react";
import {ScaleLoader} from "react-spinners";

interface LoadingVideoProps {
    label: string;
}

const LoadingVideo: FC<LoadingVideoProps>= ({ label }) => {
    return (
        <div
            className="flex flex-col justify-center items-center h-full text-white"
        >
            <ScaleLoader color="#36d7b7" />
            <p
                className="text-muted-foreground capitalize"
            >
                { label }
            </p>
        </div>
    );
};

export default LoadingVideo;