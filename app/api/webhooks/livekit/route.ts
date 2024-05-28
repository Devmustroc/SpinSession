import {WebhookReceiver} from "livekit-server-sdk";
import {headers} from "next/headers";
import {db} from "@/lib/db";

const receiver = new WebhookReceiver(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
);

export async function POST(req: Request) {
    const body = await req.text();
    const header = await headers();
    const authorization = header.get("Authorization");

    if (!authorization) {
        return new Response("Unauthorized", {status: 401});
    }

    const event = receiver.receive(body, authorization);

    if (event.event === "ingress_ended" || event.event === "ingress_started") {
        const stream = await db.stream.findUnique({
            where: {
                ingressId: event.ingressInfo?.ingressId,
            }
        });

        if (stream) {
            await db.stream.update({
                where: {
                    ingressId: event.ingressInfo?.ingressId,
                },
                data: {
                    isLive: event.event === "ingress_started",
                }
            });
        } else {
            console.error(`Stream with id ${event.ingressInfo?.ingressId} not found`);
        }
    }

    return new Response('Event processed', {status: 200});

}