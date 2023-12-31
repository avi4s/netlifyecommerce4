import React from "react";
import Link from "next/link";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        key={product.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 flex flex-col"
      >
        <a href="#">
          <img
            className="rounded-t-lg w-full h-60 object-center"
            src={product.image}
          />
        </a>
        <div className="flex flex-col flex-grow p-5 bg-slate-300">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight">
              {product.title}
            </h5>
            <h5 className="font-semibold">{product.category}</h5>
          </a>
          <div className="flex items-center mt-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-yellow-500 "
              viewBox="0 0 24 24"
            >
              <path d="M12 2 L14.39 8.26 L21 9.27 L16.47 14.14 L18.94 21 L12 17.77 L5.06 21 L7.53 14.14 L3 9.27 L9.61 8.26 L12 2 M12 5 L10.83 10 L6 10.77 L9.24 14 L8.47 18 L12 15.77 L15.53 18 L14.76 14 L18 10.77 L13.17 10 L12 5 Z"></path>
            </svg>
            <h5 className="text-white-500 font-bold">{product.rating?.rate}</h5>
          </div>
          <div className="w-full mt-auto">
            {" "}
            <Link href={`/ProductDetail/${product.id}`}>
              <Button variant="view">View</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
