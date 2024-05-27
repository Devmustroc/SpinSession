import { Input } from '@/components/ui/input';
import React, {FC} from 'react';
import CopyButton from "@/app/(dashboard)/u/[username]/keys/_components/copy-button";

interface UrlCardProps {
    value: string | null;
}

const UrlCard: FC<UrlCardProps> = ({ value }) => {
    return (
        <div
            className='rounded-xl bg-fifthColor p-6'
        >
            <div
                className="flex items-center gap-x-10"
            >
                <p
                    className="font-bold shrink-0 text-white"
                >
                    Server URL
                </p>
                <div
                    className="space-y-2 w-full"
                >
                    <div
                        className="w-full flex items-center gap-x-2"
                    >
                        <Input
                            value={value || ""}
                            disabled
                            type="text"
                            placeholder="Server URL"

                        />
                        <CopyButton
                            value={value || ""}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UrlCard;