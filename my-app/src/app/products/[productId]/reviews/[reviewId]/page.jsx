import React from "react";
import { notFound } from "next/navigation";
const page = ({ params }) => {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1>
        review{params.reviewId} for product{params.productId}
      </h1>
    </div>
  );
};

export default page;
