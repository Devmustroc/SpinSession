'use client';

import React, {useEffect} from 'react';
import {gsap} from 'gsap';

const TextNavBar = () => {
    useEffect(() => {
        gsap.fromTo('#g_textNavBar', {
            y: -70,
            duration: 1,
            ease: 'power4.out',
            delay: 0.5
        },
        {
            y: 0,
            duration: 1,
            ease: 'power4.out',
            delay: 0.5
        });
    }, []);
    return (
        <div
            id='g_textNavBar'
            className="hidden lg:flex flex-col items-center gap-x-4 "
        >
            <p

                className="font-extrabold text-2xl"
            >
                Partify
            </p>
            <p
                className="text-white text-sm"
            >
                The best place to stream your mix
            </p>
        </div>
    );
};

export default TextNavBar;