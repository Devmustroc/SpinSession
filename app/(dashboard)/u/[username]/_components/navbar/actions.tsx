import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {LogOut} from "lucide-react";
import {UserButton} from "@clerk/nextjs";



const Actions =  () => {

    return (
        <div className="flex items-center justify-end gap-x-2">
            <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-white bg-fifthColor hover:bg-fifthColor/80"
                asChild
            >
                <Link href="/">
                    <LogOut className="h-4 w-4 mr-2"/>
                    Exit
                </Link>
            </Button>
            <UserButton />
        </div>
    )
}

export default Actions;