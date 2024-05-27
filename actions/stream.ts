"use server"


import { revalidatePath} from "next/cache";
import {getSelf} from "@/lib/auth-service";
import {db} from "@/lib/db";
import {Stream} from "@prisma/client";



export const updateStream = async (data: Partial<Stream>) => {
    try {
        const self = await getSelf();
        const selfStream = await db.stream.findUnique({
            where: {
                userId: self.id,
            },
        });

        if (!selfStream) {
           return null;
        }
        const validateData = {
            name: data.name,
            isChatEnabled: data.isChatEnabled,
            isChatFollowersOnly: data.isChatFollowersOnly,
            isChatDelayed: data.isChatDelayed,
            thuumbnail: data.thuumbnail,
        };

        const stream = await db.stream.update({
            where: {
                id: selfStream.id,
            },
            data: {...validateData},
        });

        revalidatePath(`/u/${self.username}/chat`);
        revalidatePath(`/u/${self.username}`);
        revalidatePath(`/${self.username}`);

        return stream;

    } catch (error) {
        throw new Error('Internal Server Error');
    }
}
