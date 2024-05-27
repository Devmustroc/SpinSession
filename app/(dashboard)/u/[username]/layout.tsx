import React from 'react';

import {redirect} from "next/navigation";
import { getSelfByUsername } from "@/lib/auth-service";
import {Navbar} from "@/app/(dashboard)/u/[username]/_components/navbar";
import Sidebar from "@/app/(dashboard)/u/[username]/_components/sidebar";
import Container from "@/app/(dashboard)/u/[username]/_components/sidebar/container";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children } : CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);
  if (!self) {
    redirect('/login');
  }
  return (
      <>
        <Navbar />
        <div
            className="flex h-full pt-16 -ml-1 bg-slate-100"
        >
            <Sidebar />
            <Container>
                {children}
            </Container>
        </div>
      </>
  );
};

export default CreatorLayout;