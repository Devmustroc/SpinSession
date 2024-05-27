"use client";

import React, {FC, useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {CheckCheck, CopyIcon} from "lucide-react";

interface CopyButtonProps {
    value?: string | null;
}

const CopyButton: FC<CopyButtonProps> = ({ value}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        if(!value) return
        setIsCopied(true);
        navigator.clipboard.writeText(value || "");
        toast.success("Copied to clipboard");
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }

    const Icon = isCopied ? CheckCheck : CopyIcon;
    return (
        <Button
            variant="ghost"
            disabled={!value || isCopied}
            onClick={copyToClipboard}
            size='sm'
        >
            <Icon
                className="h-6 w-6 text-white"
            />
        </Button>
    );
};

export default CopyButton;