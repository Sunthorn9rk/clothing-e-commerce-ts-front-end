import React from "react";
// import {Card, CardMedia, CardContent, Typography, Box} from "@mui/material";
import Link from "next/link";
// import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import {getDiscountPricePercentage} from "../../../utils/helper";

const ProductCard = ({data}) => {
  const calculateRating = (saleAmount) => Math.floor(saleAmount / 10);
  const calculateRatingHalf = (saleAmount) => (saleAmount % 10 >= 5 ? 1 : 0);

  const rating = calculateRating(data.sale_amount);
  const ratingHalf = calculateRatingHalf(data.sale_amount);

  return <div>item</div>;
};

export default ProductCard;
