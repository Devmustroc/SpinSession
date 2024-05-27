'use client';

import React from 'react';
import {ChatVariant, useChatSidebar} from "@/store/use-chat-sidebar";
import {MessageSquare, Users} from "lucide-react";
import {Hint} from "@/components/components/hint";
import {Button} from "@/components/ui/button";

const VariantToggle = () => {
    const {variant, onChangeVariant} = useChatSidebar((state) => state);
    const isChat = variant === ChatVariant.CHAT;


    let Icon = variant === ChatVariant.CHAT ? Users : MessageSquare;

    const onToggle = () => {
        const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
        onChangeVariant(newVariant);
    }

    const label = isChat ? 'Community' : 'Go Back to Chat';
    return (
        <Hint
            label={label}
            side="left"
            asChild
        >
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Button
                onClick={onToggle}
                variant="ghost"
                className="h-auto p-2 hover:bg-fourthColor hover:text-fifthColor mt-2 text-fifthColor"
            >
                <Icon className="w-6 h-6" />
            </Button>
        </Hint>
    );
};

export default VariantToggle;