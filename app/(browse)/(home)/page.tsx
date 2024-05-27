import Results, {ResultSkeleton} from "@/app/(browse)/(home)/_components/results";
import {Suspense} from "react";

export default function Page() {


  return (
    <div
      className="h-full p-8 max-w-screen-2xl mx-auto"
    >
           <Results />
    </div>
  );
}
