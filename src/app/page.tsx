import React from "react";
import { Product } from './components/product/Product';


const Home = async () => {
  const data = await fetch("http://localhost:4000/products");
  let products = await data.json();



  return (
    <main>
      <div className="p-5 md:px-8 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  gap-4 mt-10 center">
          <Product products={products}  />
      </div>
    </main>

  );
};

export default Home;
