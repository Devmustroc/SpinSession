import React from 'react';
import {cn} from "@/lib/utils";
import {Shield, UserRoundCheck} from "lucide-react";

const ButtonParticipant = ({ name, isSelf,  isHost}: { name: string, isSelf: boolean, isHost: boolean }) => {
    return (
        <div
            className={cn(
                `
                    flex items-center justify-between w-full h-8 rounded-lg mx-auto px-2 text-sm text-amber-700
                `,
                isSelf && "text-fourthColor",
                isHost && "text-white"
            )}
            >
            <p
                className="text-sm text-fourthColor"
            >
                {name   }
            </p>
            <p
                className="flex items-center justify-center"
            >
                {
                    isSelf && <Shield
                        className={cn(
                            "w-6 h-6 ml-4 text-sky-500 fill-sky-500"
                        )}
                    />
                }
                {
                    !isSelf && !isHost && (
                        <UserRoundCheck
                            className={cn(
                                "w-6 h-6 text-amber-700"
                            )}
                        />
                    )
                }
            </p>
        </div>
    );
};

export default ButtonParticipant;