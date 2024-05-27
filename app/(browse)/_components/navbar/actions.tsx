

import React from 'react';
import {currentUser, SignInButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import Link from "next/link";

import {ClipboardCheck, ClipboardSignature} from "lucide-react";


const Actions = async () => {
    const user = await currentUser();
    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (

                    <Button size="sm"
                            variant="secondary"
                            className="hover:text-primary rounded-lg bg-black hover:bg-black/80 hover:text-white py-1 px-3 text-white text-md hover:transition-colors duration-200 ease-in-out"
                            asChild
                    >
                        <SignInButton>
                            Login
                        </SignInButton>
                    </Button>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary rounded-lg bg-fifthColor hover:bg-fifthColor/80 py-1 px-3 text-white hover:text-white hover:transition-colors duration-200 ease-in-out"
                        asChild
                    >
                        <Link href={`/u/${user.username}`}>
                            <ClipboardCheck className="h-6 w-6 lg:hidden" />
                            <span className="hidden lg:block">
                                Dashboard
                            </span>
                        </Link>
                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />
                </div>
            )}
        </div>
    )
}

export default Actions;