'use client';

import React from 'react';
import {useChatSidebar} from "@/store/use-chat-sidebar";
import {ArrowLeftFromLine, ArrowRightFromLine} from "lucide-react";
import {Hint} from "@/components/components/hint";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const ChatToggle = () => {
    const {collapsed, onExpand, onCollapse} = useChatSidebar((state) => state);


    let Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

    const onToggle = () => {
        if (collapsed) {
            onExpand();
        } else {
            onCollapse();
        }
    }

    const label = collapsed ? 'Expand' : 'Collapse';
    return (
        <Hint
            label={label}
            side="left"
            asChild
        >
            <Button
                onClick={onToggle}
                variant="ghost"
                className={cn(`
                    "h-auto p-2
                     hover:bg-fourthColor
                     hover:text-fifthColor text-fifthColor mt-2
                `
                )}
            >
                <Icon className="w-6 h-6" />
            </Button>
        </Hint>
    );
};

export default ChatToggle;