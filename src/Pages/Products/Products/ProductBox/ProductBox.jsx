import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../ProductsSlice";

const ProductBox = ({ product }) => {
  const { id, name, date, desc, price } = product;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="border p-2">
      <h1 className="text-2xl text-white font-bold">{name}</h1>
      <p className="text-justify">{desc}</p>
      <div className="flex justify-between mt-2">
        <p> {date}</p>
        <p> $ {price}</p>
      </div>

      <button
        className="btn btn-error mt-4 text-white"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductBox;
