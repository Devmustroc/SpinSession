'use client';

import React, {FC} from 'react';
import {Pencil} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import InfoModal from "@/components/components/stream-player/infoModal";

interface InfoVideoProps {
    hostIdentity: string;
    viewerIdentity: string;
    name: string;
    thunmbnail: string | null;
}

const InfoVideo: FC<InfoVideoProps> = ({
    hostIdentity,
    viewerIdentity,
    name,
    thunmbnail
}) => {
    const hoseAsViewer = `host-${hostIdentity}`;
    const isHost = viewerIdentity === hoseAsViewer;

    if (!isHost) return null;
    return (
        <div
            className="px-4"
        >
            <div
                className="rounded-xl bg-fifthColor shadow-md"
            >
                <div
                    className="flex items-center gap-x-2.5 p-4"
                >
                    <div
                        className="rounded-md bg-fourthColor p-2 h-auto w-auto"
                    >
                        <Pencil
                            className="h-5 w-5"
                        />
                    </div>
                    <div
                        className="ml-2 text-fourthColor dark:text-white dark:bg-fifthColor"
                    >
                        <h2
                            className="text-sm lg:text-lg font-semibold"
                        >
                            Edit Your Stream Info
                        </h2>
                        <p
                            className="text-muted-foreground text-xs lg:text-sm"
                        >
                            Maximize your visibility by updating your stream info
                        </p>
                    </div>
                    <InfoModal
                        initialName={name}
                        initialThumbnail={thunmbnail}
                    />
                </div>
                <Separator
                    className="my-4"
                />
                <div
                    className="p-4 lg:p-6 space-y-4 text-white dark:text-white dark:bg-fifthColor"
                >
                    <div>
                        <h3
                            className="text-sm textmuted-foreground mb-2"
                        >
                            Name
                        </h3>
                        <p>
                            {name}
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm textmuted-foreground mb-2"
                        >
                            Thumbnail
                        </h3>
                        <p>
                            {
                                thunmbnail ? (
                                    <div
                                        className="aspect-video relative rounded-md overflow-hidden w-[200px] border border-white/10"
                                    >
                                        <Image
                                            fill
                                            src={thunmbnail}
                                            alt={name}
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <span
                                        className="text-muted-foreground"
                                    >
                                    No thumbnail
                                </span>
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoVideo;