import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
    Avatar, AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {FC} from "react";
import Livebadge from "@/components/components/livebadge";
import {Skeleton} from "@/components/ui/skeleton";

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14",
                xl: "h-20 w-20",
                "2xl": "h-24 w-24",
                "3xl": "h-32 w-32",
                "4xl": "h-40 w-40",
                "5xl": "h-48 w-48",
                "6xl": "h-56 w-56",
            },
        },
        defaultVariants: {
            size: "default",
        },
    },
);

interface UserAvatarProps
    extends VariantProps<typeof avatarSizes> {
    username: string;
    image_url: string;
    isLive?: boolean;
    showBadge?: boolean;
    collapsed?: boolean;
    size?: "default" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

export const UserAvatar: FC<UserAvatarProps> = ({
    username,
    image_url,
    isLive,
    showBadge,
    collapsed,
    size = "default",


    }) => {
    const canShowBadge = showBadge && isLive;

    return (
        <div className="relative">
            <Avatar
                className={cn(
                    "",
                    isLive && "ring-2 ring-sky-500 lg:ring-sky-500 ring-offset-2",
                    avatarSizes({ size }),
                )}
            >
                <AvatarImage
                    src={image_url}
                    alt={username}
                />

                <AvatarFallback>
                    { username[0] }
                    { username[username.length - 1] }
                </AvatarFallback>
            </Avatar>
            { canShowBadge && collapsed && (
                    <Livebadge className="absolute -bottom-3 left-1/2 transform -translate-x-1/2" />
                )
            }
        </div>
    );
};

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes>{}

interface UserAvatarSkeletonProps
    extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
    return (
        <Skeleton className={cn(
            "rounded-full text-white text-xs font-bold px-2 py-1",
            avatarSizes({ size }),
        )} />
    );
};


export default UserAvatar;
