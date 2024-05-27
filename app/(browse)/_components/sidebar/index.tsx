import React from 'react';
import Wrapper from "@/app/(browse)/_components/sidebar/wrapper";
import Toggle, {ToggleSkeleton} from "@/app/(browse)/_components/sidebar/toggle";
import Recommendations, {RecommendedSkeleton} from "@/app/(browse)/_components/sidebar/recommendations";
import {getRecommended} from "@/lib/recommended-service";
import Following, {FollowingSkeleton} from "@/app/(browse)/_components/sidebar/following";
import {getFollowerdUser} from "@/lib/follow-service";

export const Sidebar = async  () => {
    const recommended =  await  getRecommended();
    const follower = await getFollowerdUser()
    return (
        <Wrapper>
            <Toggle />
            <div
                className="space-y-4 pt-8 lg:pt-0 transition-all duration-1000 ease-in" /*px-4 lg:px-8 h-full overflow-y-auto*/
            >
                <Following data={follower}/>
                <Recommendations data={recommended} />
            </div>
        </Wrapper>
    );
};

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecommendedSkeleton />
        </aside>
    );
};
