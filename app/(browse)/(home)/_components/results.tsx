import React, { useEffect, useState } from 'react';
import {getStreams} from "@/lib/seedService";
import ResultCard from "@/components/components/resultcard";




const Results = async  () => {

    const newResults = await getStreams();

    return (
        <div>
            <h2
                className="text-2xl font-semibold text-fourthColor mb-4"
            >
                Some Stream to watch
            </h2>
            {
                newResults.length === 0 && (
                    <div>
                        No streams found
                    </div>
                )
            }
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
            >
                {
                    newResults.map((stream) => (
                            <ResultCard
                                key={stream.id}
                                data={stream}
                            />
                    ))
                }
            </div>
        </div>
    );
};

export default Results;

export const ResultSkeleton = () => {
    return (
        <div>
            skeleton
        </div>
    )
};