import React from 'react';
import Wrapper from "@/app/(dashboard)/u/[username]/_components/sidebar/wrapper";
import Toggle from "@/app/(dashboard)/u/[username]/_components/sidebar/toggle";
import Navigation from "@/app/(dashboard)/u/[username]/_components/sidebar/navigation";

const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
        </Wrapper>
    );
};

export default Sidebar;