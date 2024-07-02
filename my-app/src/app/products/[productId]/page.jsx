import React from "react";

//dynamic metadata
export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productId}`,
  };
};
const page = ({ params }) => {
  return (
    <div>
      <h1>Details about product{params.productId}</h1>
    </div>
  );
};

export default page;
