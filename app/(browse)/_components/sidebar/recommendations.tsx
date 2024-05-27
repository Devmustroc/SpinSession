"use client";

import React, {FC} from 'react';
import {User} from "@prisma/client";
import {useSidebar} from "@/store/use-sidebar";
import UserItem, {UserItemSkeleton} from "@/app/(browse)/_components/sidebar/user-item";

interface RecommendationsProps {
    data: (User & { stream: { isLive: boolean} | null })[];
}

const Recommendations: FC<RecommendationsProps> = ({ data }) => {
    const collapsed = useSidebar((state) => state.collapsed);


    const showLabel = !collapsed && data.length > 0;
    return (
        <div>
            {showLabel && (
                <div className="pl-6 mb-4">
                    <p className="text-sm text-start">
                        Recommended
                    </p>
                </div>
            )}
            <ul className="space-y-2 px-2">
                {data.map((user) => (
                    <UserItem
                        key={user.id}
                        username={user.username}
                        image_url={user.imageUrl}
                        isLive={user.stream?.isLive}
                    />
                ))}
            </ul>
        </div>
    );
};



export const RecommendedSkeleton = () => {
    return (
        <ul className="px-2">
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    );
};
export default Recommendations;