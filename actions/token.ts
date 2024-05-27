"use server";


import {v4} from "uuid";
import {getUserById} from "@/lib/user-service";
import {getSelf} from "@/lib/auth-service";
import {isBlockedByUser} from "@/lib/block-service";
import {AccessToken} from "livekit-server-sdk";

export const createViewerToken = async (hostIdentity: string) => {
    let self;

    try {
        self = await getSelf();
    } catch (err) {
        const id = v4();
        const username= `guest#${Math.floor(Math.random() * 1000)}`;
        self = { id, username};
    }

    const host = await getUserById(hostIdentity);

    if (!host) {
        throw new Error("Host not found");
    }

    const isBlocked = await isBlockedByUser(host.id);

    if (isBlocked) {
        throw new Error("You are Blocked by the host");
    }

    const isHost = self.id === host.id;
    const api = process.env.LIVEKIT_API_KEY!;
    const secret = process.env.LIVEKIT_API_SECRET!;

    const token = new AccessToken(
        api,
        secret,
        {
            identity: isHost ? `host-${self.id}` : self.id,
            name: self.username,
        }
    );

    token.addGrant({
        room: host.id,
        roomJoin: true,
        canPublish: false,
        canPublishData: true
    });

    const jwtToken = Promise.resolve(token.toJwt());

    return jwtToken;
};