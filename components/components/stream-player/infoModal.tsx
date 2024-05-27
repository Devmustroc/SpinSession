'use client';

import React, {ElementRef, FC, useRef, useState, useTransition} from 'react';
import {Dialog, DialogClose, DialogContent, DialogTrigger} from "@/components/ui/dialog";

import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {updateStream} from "@/actions/stream";
import {toast} from "sonner";
import {UploadDropzone} from "@/lib/uploadthing";
import {useRouter} from "next/navigation";
import {Hint} from "@/components/components/hint";
import {Trash} from "lucide-react";
import Image from "next/image";


interface InfoModalProps {
    initialName: string;
    initialThumbnail: string | null;
}

const InfoModal: FC<InfoModalProps> = ({ initialThumbnail,  initialName}) => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const [name, setName] = useState(initialName);
    const [thumbnail, setThumbnail] = useState(initialThumbnail);
    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    const onRemoveThumbnail = () => {
        startTransition(() => {
            updateStream({ thuumbnail: null }).then(() => {
                setThumbnail("");
                toast.success("Thumbnail removed");
                closeRef.current?.click();
            }).catch(() => {
                toast.error("An error occurred");
            });
        });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startTransition(() => {
            updateStream({
                name: name
            }).then(() => {
                toast.success("Stream updated");
                closeRef.current?.click();
            }).catch(() => {
                toast.error("An error occurred");
            });
        });
    }

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <Dialog>
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
                <form
                    onSubmit={onSubmit}
                    className="space-y-14">
                    <div
                        className="space-y-2"
                    >
                        <Label>
                                Name
                        </Label>
                        <Input
                            placeholder="Stream title"
                            onChange={onChangeName}
                            value={name}
                            name="name"
                        />
                    </div>
                    <div
                        className="space-y-2"
                    >
                        <Label>
                            Thumbnail
                        </Label>
                        {
                                thumbnail ? (
                                    <div
                                        className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
                                    >
                                        <div
                                            className="absolute top-2 right-2 z-[10]"
                                        >
                                            <Hint
                                                label="Remove"
                                                side="right"
                                            >
                                                <Button
                                                    type='button'
                                                    disabled={isPending}
                                                    onClick={onRemoveThumbnail}
                                                    className="h-auto w-auto bg-red-500 hover:bg-red-700"
                                                >
                                                    <Trash
                                                        className="w-4 h-4 text-white"
                                                    />
                                                </Button>
                                            </Hint>
                                        </div>
                                        <Image
                                            src={thumbnail}
                                            layout="fill"
                                            objectFit="cover"
                                            alt={name}
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="rounded-xl border outline-dashed outline-muted"
                                    >
                                        <UploadDropzone endpoint="thumbnailUploader"
                                                        appearance={{
                                                            label: {
                                                                color: "#fff",
                                                            },
                                                            allowedContent: {
                                                                color: "#fff",
                                                            },
                                                        }}
                                                        onClientUploadComplete={(res) => {
                                                            setThumbnail(res?.[0].url);
                                                            router.refresh();
                                                            closeRef?.current?.click();
                                                        }}
                                        />
                                    </div>
                                )
                        }
                    </div>
                    <div
                        className="flex justify-between"
                    >
                        <DialogClose
                            ref={closeRef}
                            asChild>
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
                            className='bg-amber-700 hover:bg-amber-800'
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default InfoModal;