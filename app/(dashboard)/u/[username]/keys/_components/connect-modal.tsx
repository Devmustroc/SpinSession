'use client';


import React, {ElementRef, useRef, useState, useTransition} from 'react';
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertTriangle} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {IngressInput} from "livekit-server-sdk";
import {createIngress} from "@/actions/ingress";
import {toast} from "sonner";


const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP;

const ConnectModal = () => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const [isPending, startTransition] = useTransition();
    const [ingressType, setIngressType] = useState<IngressType>(RTMP);

    const onSubmit = () => {
        startTransition(() => {
            createIngress(parseInt(ingressType))
                .then(() => {
                    toast.success("Ingress created");
                    closeRef?.current?.click();
                })
                .catch(() => toast.error("Something went wrong"));
        });
    }
    return (
        <Dialog>
            <DialogTrigger
                asChild
            >
                <Button
                    variant="primary"
                    className="bg-fifthColor hover:bg-fifthColor/90 text-white"
                >
                    Generate Connection
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Generate Connection
                    </DialogTitle>
                </DialogHeader>
                <Select
                    disabled={isPending}
                    value={ingressType}
                    onValueChange={(value) => setIngressType(value)}
                >
                    <SelectTrigger
                        className="w-full"
                    >
                        <SelectValue
                            placeholder="Ingress Type"
                        />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem
                            value={RTMP}
                        >
                            RTMP
                        </SelectItem>
                        <SelectItem
                            value={WHIP}
                        >
                            WHIP
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Alert
                    className="mb-4 bg-white"
                >
                    <AlertTriangle
                        className="h-6 w-6 text-yellow-500"

                    />
                    <AlertTitle>
                        Warning!
                    </AlertTitle>
                    <AlertDescription
                        className="text-sm"
                    >
                        This action will generate a new stream key and server URL. Are you sure you want to continue?
                    </AlertDescription>
                </Alert>
                <div
                    className="flex justify-between"
                >
                    <DialogClose
                        asChild
                        ref={closeRef}
                    >
                        <Button
                            variant="ghost"
                            className="text-white"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose>
                        <Button
                            disabled={isPending}
                            onClick={onSubmit}
                            variant="primary"
                            className="bg-black hover:bg-black/90 text-white"
                        >
                            Generate
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConnectModal;