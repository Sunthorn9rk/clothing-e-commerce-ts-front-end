import React from "react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const {Meta} = Card;
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"; // นำเข้าไอคอนดาว
import {getDiscountPricePercentage} from "@/utils/helper";

const ProductCard = ({data}) => {
  const calculateRating = (saleAmount) => Math.floor(saleAmount / 10);
  const calculateRatingHalf = (saleAmount) => (saleAmount % 10 >= 5 ? 1 : 0);

  const rating = calculateRating(data.sale_amount);
  const ratingHalf = calculateRatingHalf(data.sale_amount);

  return (
    <Link
      href={`/product/${data.id}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Card className="my-4 border-0 shadow-none">
        <div>
          {data.files[0] ? (
            <div className="w-full h-80 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-2xl"
                alt="example"
                src={"http://localhost:5000/uploads/" + data.files[0]}
              />
            </div>
          ) : (
            <div className="w-full h-80 overflow-hidden">
              <img
                alt="no-image"
                className="w-full h-full object-cover rounded-2xl"
                src="http://localhost:5000/public/no-image.jpg"
                // style={{width: "100%", height: 300}}
              />
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className=" text-xl">{data.name}</CardTitle>
          <CardDescription>
            {" "}
            {/* แสดงดาวเรทติ้ง */}
            <div
              style={{display: "flex", alignItems: "center", marginTop: "10px"}}
            >
              {[...Array(5)].map((_, index) => {
                if (index < rating) {
                  return <FaStar key={index} color="gold" />;
                } else if (index === rating && ratingHalf === 1) {
                  return <FaStarHalfAlt key={index} color="gold" />;
                } else {
                  return <FaRegStar key={index} color="gold" />;
                }
              })}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 ">
                ฿{data?.price}
              </span>
              <span className="text-2xl font-bold line-through text-black/40 ">
                {data?.originalPrice}
              </span>
              <p className="text-sm font-medium text-red-500  p-1 rounded-full bg-gray-100">
                -{getDiscountPricePercentage(data?.originalPrice, data?.price)}%
              </p>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;
