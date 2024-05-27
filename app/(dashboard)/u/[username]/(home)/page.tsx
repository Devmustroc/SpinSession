import React from 'react';
import {currentUser} from "@clerk/nextjs";
import {getUserByUsername} from "@/lib/user-service";
import Index from "@/components/components/stream-player";

interface CreatorPageProps {
    params: {
        username: string;
    }
}

const CreatorPage = async ({ params }: CreatorPageProps ) => {
    const visiter = await currentUser();
    const user = await getUserByUsername(params.username);

    if (!user || visiter?.id !== user.externalUserId || !user.stream) {
        throw new Error("User not found");
    }
    return (
        <div
            className="bg-slate-100 h-full"
        >
            <Index
                user={user}
                stream={user.stream}
                isFollowing
            />
        </div>
    );
};

export default CreatorPage;