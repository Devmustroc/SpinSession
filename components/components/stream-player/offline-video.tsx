import React, {FC} from 'react';
import {WifiOffIcon} from "lucide-react";

interface OfflineVideoProps {
    username: string;
}

const OfflineVideo: FC<OfflineVideoProps>= ({ username }) => {
    return (
        <div
            className="flex flex-col justify-center items-center h-full text-white"
        >
            <WifiOffIcon
                className="h-10 w-10 text-muted-foreground"
            />
            <p
                className="text-white"
            >
                { username } is offline
            </p>
        </div>
    );
};

export default OfflineVideo;