import React, {FC, useMemo, useTransition} from 'react';
import {cn, stringToColor } from "@/lib/utils";
import {Hint} from "@/components/components/hint";
import {Button} from "@/components/ui/button";
import {MinusCircle} from "lucide-react";
import {toast} from "sonner";
import {onBlock} from "@/actions/block";
import ButtonParticipant from "@/components/components/stream-player/buttonParticipant";

interface CommunityItem {
    hostName: string
    participantName?: string
    participantIdentity: string
    viewerName: string
}

const CommunityItem: FC<CommunityItem>= ({
    hostName,
    participantName,
    participantIdentity,
    viewerName
                                         }) => {
    const [isPending, startTransition] = useTransition()

    const color = stringToColor(participantName || '')
    const isSelf = participantName === viewerName
    const isHost = viewerName === hostName

    const handleBlock = () => {
        if(!participantName || isSelf || !isHost) return;
        startTransition(() => {
            onBlock(participantIdentity)
                .then(() => toast.success(`Blocked ${participantName}`))
                .catch(() => toast.error(`Failed to block ${participantName}`))
        })
    }

    return (
        <div
            className={cn(`
                group flex items-center justify-between w-full py-2 rounded-md text-sm hover:bg-white/5 gap-4 px-2
            `,
                isPending && "opacity-50 pointer-events-none"
            )}
        >
            <ButtonParticipant name={participantName || participantIdentity}
                               isSelf={isSelf}
                               isHost={isHost}
            />
            {
                isHost && !isSelf && (
                    <Hint label="Block"
                          className="bg-amber-900 text-black  p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out hover:bg-amber-900/90 rounded-md px-2"
                    >

                        <Button
                            variant="ghost"
                            disabled={isPending}
                            onClick={handleBlock}
                            className="h-auto w-auto p-1 bg-black opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out hover:bg-white/10 rounded-md"
                        >
                            <MinusCircle
                                className="h-6 w-6 bg-black rounded-md  text-muted-foreground hover:text-white hover:bg-red-700 transition-all duration-200 ease-in-out"
                            />
                        </Button>
                    </Hint>
                )
            }
        </div>
    );
};

export default CommunityItem;