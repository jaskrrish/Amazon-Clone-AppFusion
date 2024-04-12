import React from "react";

const ProductImage = ({ source }) => {
  return (
    <div className="bg-white m-4 p-3 rounded-lg shadow-xl">
      <img
        src={source}
        className="hover:scale-105 transition duration-500 ease-in-out m-4 p-3"
        alt="ProductImage"
        width={300}
        height={300}
      />
    </div>
  );
};

export default ProductImage;
