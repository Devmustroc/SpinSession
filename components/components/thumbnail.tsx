import React, {FC} from 'react';
import UserAvatar from "@/components/components/user-avatar";
import Image from "next/image";

interface ThumbnailProps {
    src: string | null;
    fallback: string;
    isLive: boolean;
    username: string;
}

const Thumbnail: FC<ThumbnailProps> = ({
    src,
    fallback,
    isLive,
    username
}) => {
    let content;

    if (!src)  {
         content = (
             <div
                className="bg-amber-700 flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform  rounded-md"
             >
                 <UserAvatar
                    size="lg"
                    showBadge
                    username={username}
                    image_url={fallback}
                    isLive={isLive}
                 />
             </div>
         )

    } else {
        content = (
            <Image
                src={src}
                fill
                alt="thumbnail"
                className="rounded-md object-cover"
            />
        )
    }
    return (
        <div className="aspect-video group relative rounded-md cursor-pointer">
            <div
                className="rounded-md absolute inset-0 bg-fifthColor opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
             />
            {content}
        </div>
    );
};

export default Thumbnail;
