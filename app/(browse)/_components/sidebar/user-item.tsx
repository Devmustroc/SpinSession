'use client';

import React, {FC} from 'react';
import { usePathname } from 'next/navigation';
import {useSidebar} from "@/store/use-sidebar";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import UserAvatar from "@/components/components/user-avatar";
import Livebadge from "@/components/components/livebadge";
import {Skeleton} from "@/components/ui/skeleton";


interface UserItemProps {
    username: string;
    image_url: string;
    isLive?: boolean;
    collapsedLive?: boolean;
}

const UserItem: FC<UserItemProps> = ({
    username,
    image_url,
    isLive,
    collapsedLive,
    }) => {
    const pathname = usePathname();
    const { collapsed } = useSidebar((state) => state);
    const href = `/${username}`;
    const isActive = pathname === href;

    return (
        <Button
            asChild
            variant="ghost"
            className={cn(
                `w-full h-12 hover:border-l-4 hover:border-fifthColor 
                 transition-all duration-300 ease-in-out  border-transparent`,
                collapsed ? "justify-center transition-all duration-[300ms] ease-in-out" : "justify-start transition-all duration-[300ms] ease-in-out",
                collapsedLive ? "justify-center transition-all duration-[300ms] ease-in-out" : "",
                isActive && "bg-accent",
            )}
        >
            <Link href={href}>
                <div className={cn(
                    "flex items-center rounded-full gap-x-4 justify-between px-3 py-2 w-full h-full",
                    collapsed && "justify-center",
                )}>
                    <UserAvatar
                        image_url={image_url}
                        username={username}
                        isLive={isLive}
                        showBadge={true}
                        collapsed={collapsed}
                    />
                    {
                        !collapsed && (
                            <p
                                className="trancate text-sm text-black font-semibold animate-in text-left uppercase"
                            >
                                {username}
                            </p>
                        )
                    }
                    {
                        !collapsed && isLive && (
                            <Livebadge
                                className="ml-auto"
                            />
                        )
                    }
                </div>
            </Link>
        </Button>
    );
};


export const UserItemSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[32px] min-w-[32px] rounded-full bg-background border border-background" />
            <div className="flex-1">
                <Skeleton className="h-6" />
            </div>
        </li>
    );
};

export default UserItem;