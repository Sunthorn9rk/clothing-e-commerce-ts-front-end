import React from "react";
// import {Card, Skeleton, Box} from "@mui/material";
import {Skeleton} from "@/components/ui/skeleton";

interface LoadingCardProps {
  count: number;
}

const LoadingCard: React.FC<LoadingCardProps> = ({count}) => {
  return (
    <>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className="my-4">
          {/* <div className="flex flex-col space-y-3">
            <Skeleton className="w-full h-80 rounded-2xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div> */}
          <div className="space-y-3">
            <Skeleton className="w-full h-80 rounded-2xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[180px]" />
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingCard;
