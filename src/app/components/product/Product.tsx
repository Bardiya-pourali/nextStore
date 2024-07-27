"use client";
import React, { useState } from "react";
import Button from "../button/Button";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  iscounted_price: number;
  colors: string[];
  bought_count: number;
}

export const Product = ({ products }: Product) => {
  const [count, setCount] = useState(10);

  const loadMore = () => {
    setCount(count + 10);
  };

  return (
    <>
      {products.slice(0, count).map((product) => (
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt=""
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{product.name}</h2>
            <p className="line-clamp-1">{product.description}</p>

            <div>
              {product.colors.map((item) => (
                <span
                  className="px-2.5 rounded-full mx-1 border-solid border-2 "
                  style={{ background: `${item}` }}
                ></span>
              ))}
            </div>
            <div className="card-actions justify-end">
              <p className="pt-2">{product.price} $</p>
              <button className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <button className="btn btn-secondary" onClick={loadMore}>load more</button>
    </>
  );
};
