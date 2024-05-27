"use client";

import React, {FC} from 'react';
import {LucideIcon} from "lucide-react";
import {useCreatorSidebar} from "@/store/useCreator-Sidebar";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Skeleton} from "@/components/ui/skeleton";

interface NavItemProps {
    label: string;
    icon: LucideIcon;
    href: string;
    isActive: boolean;
}

const NavItem: FC<NavItemProps> = ({
    label,
    icon: Icon,
    href,
    isActive,

    }) => {
    const { collapsed } = useCreatorSidebar((state) => state);
    return (
        <Button
            asChild
            variant="ghost"
            className={cn(
                "w-full h-12 hover:border-l-4 hover:border-fifthColor hover:bg-fifthColor hover:bg-opacity-10 hover:text-black",
                collapsed ? "justify-center transition-all duration-[300ms] ease-in-out" : "justify-start transition-all duration-[300ms] ease-in-out",
                isActive && "bg-fifthColor text-fourthColor",
            )}
        >
            <Link
                href={href}
            >
                <div
                    className="flex items-center rounded-full gap-x-4"
                >
                    <Icon
                        className={cn("h-4 w-4",
                                collapsed ? "mr-0" : "mr-2",
                            )}
                    />
                    {
                        !collapsed && (
                            <span>
                                {label}
                            </span>
                        )
                    }
                </div>

            </Link>
        </Button>
    );
};


export const NavItemSkeleton = () => {
    return (
        <li
            className="flex items-center gap-x-4 px-3 py-2"
        >
            <Skeleton
                className="min-h-[48px] min-w-[48px] rounded-full"
            />
            <div
                className="flex-1 hidden lg:block"
            >
                <Skeleton className="h-6" />
            </div>
        </li>
    )
}

export default NavItem;