"use client";
import React, { useState } from "react";

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

export const Product = ({ products }:Product) => {
  const [count, setCount] = useState(10);

  const loadMore = () => {
    setCount(count + 10);
  };

  return (
    <>
      {products.slice(0, count).map((product) => (
        <div className="card bg-base-300 shadow-xl rounded-sm">
          <figure>
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt=""
            />
          </figure>
          <div className="card-body max-h-64">
            <h2 className="card-title line-clamp-1">{product.name}</h2>
            <p className="line-clamp-1">{product.description}</p>

            <div>
              {product.colors.map((item) => (
                <span
                  className="px-2.5 rounded-full mx-1 border-solid border-2 "
                  style={{ background: `${item}` }}
                ></span>
              ))}
            </div>
            <div className="card-actions justify-end items-center">
              {product.discounted_price != 0 ?
               <p className="pt-2"> <del className="text-red-700 pr-3">{product.price}</del>    {product.discounted_price} $</p>
              :
              <p className="pt-2">{product.price} $</p>}
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
