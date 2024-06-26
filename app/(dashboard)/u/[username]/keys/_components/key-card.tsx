'use client';

import React, {FC, useState} from 'react';
import {Input} from "@/components/ui/input";
import CopyButton from "@/app/(dashboard)/u/[username]/keys/_components/copy-button";
import {Button} from "@/components/ui/button";

interface KeyCardProps {
    value: string | null;

}

const KeyCard: FC<KeyCardProps>= ({ value }) => {
    const [show, setShow] = useState(false);
    return (
        <div
            className="rounded-xl p-6 bg-fifthColor"
        >
            <div
                className="flex items-start gap-x-10"
            >
                <p
                    className="font-semibold shrink-0 text-white"
                >
                    Stream Key
                </p>

                <div
                    className="space-y-2 w-full"
                >
                    <div
                        className="flex items-center justify-center gap-x-2 w-full bg-a"
                    >
                        <Input
                            value={value || ''}
                            type={show ? 'text' : 'password'}
                            disabled
                            className="w-full"
                            placeholder='Stream Key'
                        />
                        <CopyButton
                            value={value || ''}
                        />
                    </div>
                    <Button
                        onClick={() => setShow(!show)}
                        size="sm"
                        variant="ghost"
                        className="text-white"
                    >
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default KeyCard;