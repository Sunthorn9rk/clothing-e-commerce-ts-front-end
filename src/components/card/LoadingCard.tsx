import React from "react";
import {Card, Skeleton, Box} from "@mui/material";

interface LoadingCardProps {
  count: number;
}

const LoadingCard: React.FC<LoadingCardProps> = ({count}) => {
  return (
    <>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <Card
            sx={{
              height: 300,
              width: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Box sx={{width: "90%", height: "80%"}}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{borderRadius: 2}}
              />
            </Box>
          </Card>
        </div>
      ))}
    </>
  );
};

export default LoadingCard;
