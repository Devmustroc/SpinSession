import React, {Suspense} from 'react';
import {Navbar} from "@/app/(browse)/_components/navbar";
import {Sidebar, SideBarSkeleton} from "@/app/(browse)/_components/sidebar";
import Container from './_components/container';

const BrowseLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <>
            <Navbar />
            <div
                className="flex h-full pt-20"
            >
                <Suspense
                    fallback={<SideBarSkeleton />}
                >
                    <Sidebar />
                </Suspense>
                <Container>
                    { children }
                </Container>
            </div>
        </>
    )
}

export default BrowseLayout;