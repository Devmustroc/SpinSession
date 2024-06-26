'use server';

import { db } from "@/lib/db"
import { getSelf } from "@/lib/auth-service";



export const getStreams = async () => {
    let userId;

    try {
        const self = await getSelf();
        userId = self.id;
    } catch {
        userId = null;
    }

    let streams = [];


        if (userId) {
            streams = await db.stream.findMany({
                where: {
                    user: {
                        NOT: {
                            Blocking: {
                                some: {
                                    blockedId: userId,
                                }
                            }
                        }
                    }
                },
                include: {
                    user: true,
                },
                orderBy: [
                    {
                        isLive: "desc",
                    },
                    {
                        updatedAt: "desc",
                    }
                ],
            });
        } else {
            streams = await db.stream.findMany({
                include: {
                    user: true,
                },
                orderBy: [
                    {
                        isLive: "desc",
                    },
                    {
                        updatedAt: "desc",
                    }
                ]
            });
        }
        return streams;

};
