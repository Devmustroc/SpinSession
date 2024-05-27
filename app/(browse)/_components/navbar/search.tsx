"use client";

import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon, X} from "lucide-react";
import {useRouter} from "next/navigation";
import queryString from 'query-string';


const Search = () => {
    const router = useRouter();
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;

        const url = queryString.stringifyUrl({
            url: '/search',
            query: { term: value }
        }, { skipEmptyString: true });

        router.push(url)
    }

    const onClear = () => {
        setValue('');
    };

    return (
        <form
            onSubmit={onSubmit}
            className="relative w-full flex items-center lg:w-[500px] gap-x-2"
        >
            <Input
                value={value}

                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                className="p-2 rounded-lg w-full text-muted-foreground  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent focus-visible:ring-opacity-50"
            />
            {value && (
                <X
                    onClick={onClear}
                    className="absolute h-5 w-5 top-2 right-9 text-black hover:text-white hover:opacity-75 cursor-pointer transition -translate-x-[150%]"
                />
            )}
            <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-lg-none bg-fifthColor hover:bg-fifthColor/80 transition"

            >
                <SearchIcon
                    className="h-5 w-5 text-white hover:text-white transition"
                />
            </Button>
        </form>
    )
};

export default Search;