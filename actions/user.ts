'use server';


import {User} from "@prisma/client";
import {getSelf} from "@/lib/auth-service";
import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";


export const updateUser = async (values: Partial<User>) => {
        const self = await getSelf();

        if (!self) {
            throw new Error("User not found")
        }

        const validData = {
            bio: values.bio,
        };

        const user = await db.user.update({
            where: {
                id: self.id
            },
            data: {
                ...validData
            }
        });

        revalidatePath(`/u/${user.username}`);
        revalidatePath(`/${user.username}`);

        return user;
}