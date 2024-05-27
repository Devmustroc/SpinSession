"use client";


import React, {ElementRef, FC, useRef, useTransition} from 'react';
import {Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {updateUser} from "@/actions/user";
import {toast} from "sonner";

interface BioModalProps {
    initialValue: string | null;
}

const BioModal: FC<BioModalProps> = ({ initialValue }) => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const [value, setValue] = React.useState(initialValue || "");
    const [isPending, starTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            starTransition(() => {
                updateUser({
                    bio: value
                }).then(() => {
                toast.success('Updated successfully');
                closeRef.current?.click();
            }).catch(() => {
                toast.error('Something went wrong');
            })
        });
    }

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    return (
        <Dialog
        >
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="lg"
                    className="ml-auto text-xl text-fourthColor"
                >
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle
                    className="text-fifthColor dark:text-white"
                >
                    Edit Your Artist Life Style
                </DialogTitle>
                <form
                    onSubmit={onSubmit}
                    className="space-y-4"
                >
                    <Textarea
                        onChange={onChange}
                        placeholder="Write about your artist life style...."
                        value={value}
                        disabled={isPending}
                        className="resize-none"
                    />
                    <div
                        className="flex justify-between"
                    >
                        <DialogClose asChild
                            ref={closeRef}
                        >
                            <Button
                                type="button"
                                variant="ghost"

                            >
                                Close
                            </Button>
                        </DialogClose>
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="bg-fifthColor dark:bg-white dark:text-fifthColor dark:border-fifthColor dark:hover:bg-white dark:hover:text-fifthColor dark:hover:border-fifthColor text-white"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BioModal;