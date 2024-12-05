"use client"
import { notFound } from "next/navigation";

const getRandomInt = (count:number) =>{
    return Math.floor(Math.random() * count)
}

export default function ReviewDetail({
  params
}: {
  params: { productId: string; reviewId: string };
}) {
  // if(parseInt(params.reviewId) > 5) {
  //   return notFound();
  // }
    const random = getRandomInt(2)
    if(random === 1){
        console.log("from condition")
        throw new Error('Error loanding review')
    }
  return (
    <div>
      <h1>
        Review Detail for product {params.productId} review {params.reviewId}
      </h1>
    </div>
  );
}
