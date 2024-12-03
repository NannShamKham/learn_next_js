import { notFound } from "next/navigation";
export default function ReviewDetail({
  params
}: {
  params: { productId: string; reviewId: string };
}) {
  if(parseInt(params.reviewId) > 5) {
    return notFound();
  }
  return (
    <div>
      <h1>
        Review Detail for product {params.productId} review {params.reviewId}
      </h1>
    </div>
  );
}
