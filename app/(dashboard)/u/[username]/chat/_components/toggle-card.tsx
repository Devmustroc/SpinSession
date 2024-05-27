"use client";

import React, {FC, useTransition} from 'react';
import {Switch} from "@/components/ui/switch";
import { toast } from "sonner"
import {updateStream} from "@/actions/stream";
import {Skeleton} from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
    label: string;
    value: boolean;
    field: FieldTypes;
}

const ToggleCard: FC<ToggleCardProps> = ({
    label,
    value,
    field,
    }) => {
    const [isPending, startTransition] = useTransition();

    const onChange = async () => {
        startTransition(() => {
            updateStream({
                [field]: !value,
            }).then(() => {
                toast.success("Chat settings updated");
            }).catch((error) => {
                toast.error(error.message);
            });
        });
    }

    return (
        <div
            className="rounded-xl bg-fifthColor p-6"
        >
            <div
                className="flex items-center justify-between"
            >
                <p
                    className="font-semibold shrink-0 text-white"
                >
                    {label}
                </p>
                <div
                    className="space-y-2"
                >
                    <Switch
                        disabled={isPending}
                        onCheckedChange={onChange}
                        checked={value}
                    >
                        {value ? "On" : "Off"}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export const ToggleCardSkeleton: FC = () => {
    return (
        <Skeleton className="rounded-xl p-10 w-full" />
    )
};

export default ToggleCard;