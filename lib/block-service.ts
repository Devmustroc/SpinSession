import { db } from "./db";
import {getSelf} from "./auth-service";


export const isBlockedByUser = async (userId: string) => {
    try {
        const self = await getSelf();

        // Check if the user is blocked by the current user
        const otherUser = await db.user.findUnique({
            where: {
                id: userId,
            }
        });
        if (!otherUser) throw new Error("Not Found");
        if (otherUser.id === self.id) throw new Error("Unauthorized");

        const existingBlock = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: self.id,
                    blockedId: otherUser.id,
                }
            }
        });

        return !!existingBlock;
    } catch  {
        return false;
    }
};

export const blockUser = async (id: string) => {
    const self = await getSelf();

    if (self.id === id) {
        throw new Error("Cannot block yourself");
    }

    const otherUser = await db.user.findUnique({
        where: { id }
    });

    if (!otherUser) {
        throw new Error("User not found");
    }

    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id,
            },
        },
    });

    if (existingBlock) {
        throw new Error("Already blocked");
    }

    const block = await db.block.create({
        data: {
            blockerId: self.id,
            blockedId: otherUser.id,
        },
        include: {
            blocked: true,
        },
    });

    return block;
};



export const unblockUser = async (userId: string) => {
        const self = await getSelf();

        if (!self) throw new Error("Unauthorized");
        if (self.id === userId) throw new Error("Cannot unblock self");

        // Check if the user is blocked by the current user
        const otherUser = await db.user.findUnique({
            where: {
                id: userId,
            }
        });

        // Check if the block exists
        if (!otherUser) throw new Error("User not found");

        const existingBlock = await db.block.findUnique({
            where : {
                blockerId_blockedId: {
                    blockerId: self.id,
                    blockedId: otherUser.id,
                },
            }
        });

        if (!existingBlock) throw new Error("Not blocked");

        const ublocked = await db.block.delete({
            where: {
                id: existingBlock.id,
            },
            include: {
                blocked: true,
            },
        });

        return ublocked;
};