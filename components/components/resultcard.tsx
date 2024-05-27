import React, {FC} from 'react';
import {Stream, User} from "@prisma/client";
import Link from "next/link";
import Thumbnail from "@/components/components/thumbnail";


interface ResultCardProps {
    data: Stream & {
        user: User
    }
}

const ResultCard: FC<ResultCardProps> = ( { data }) => {
    return (
        <Link
            href={`/${data.user.username}`}
        >
            <div className="shadow-md overflow-hidden h-full w-full space-y-4 group">
                    <Thumbnail
                        src={data.thuumbnail}
                        fallback={data.user.imageUrl}
                        isLive={data.isLive}
                        username={data.user.username}
                    />
                {
                    data.isLive && (
                        <div
                            className="flex items-center gap-2 px-2 py-1 bg-red-500 text-white text-sm rounded-md"
                        >
                            LiveBadge
                        </div>
                    )
                }
            </div>
        </Link>
);
};

export default ResultCard;