import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ProductsSlice";
import ProductBox from "./ProductBox/ProductBox";
import AddBook from "../../Book/AddBook/AddBook";
import AddProduct from "./AddProduct/AddProduct";

const Products = () => {
  const { products, isLoading, error } = useSelector((state) => state.productR);
  // console.log(products);

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchProducts());
  }, [disPatch]);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="p-5">
      <h1 className="text-xl text-white font-bold">Products</h1>
      <div className="my-10">
        <AddProduct />
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <ProductBox key={idx} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <h1>No Product</h1>
        </div>
      )}
    </div>
  );
};

export default Products;
