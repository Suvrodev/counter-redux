import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../ProductsSlice";

const AddProduct = () => {
  const disPatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault();
    const Form = e.target;
    const id = Form.id.value;
    const name = Form.name.value;
    const desc = Form.desc.value;
    const price = Form.price.value;
    const date = Form.date.value;

    const newProduct = { id, name, desc, price, date };
    // console.log(newProduct);
    disPatch(addProduct(newProduct));
  };

  return (
    <div>
      <form
        onSubmit={handleAddBook}
        className="flex flex-col gap-4 w-1/2 mx-auto border p-5 rounded-md"
      >
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          className="bg-transparent w-full border rounded-md px-4 py-2 text-white"
        />

        <div className="flex gap-4">
          <input
            type="number"
            name="id"
            id=""
            placeholder="ID"
            className="bg-transparent w-1/2 border  rounded-md px-4 py-2 text-white"
          />
          <input
            type="text"
            name="desc"
            id=""
            placeholder="Description"
            className="bg-transparent w-1/2 border rounded-md px-4 py-2 text-white"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="number"
            name="price"
            id=""
            placeholder="Price"
            className="bg-transparent w-1/2 border rounded-md px-4 py-2 text-white"
          />

          <input
            type="date"
            name="date"
            id=""
            placeholder="Date"
            className="bg-transparent w-1/2 border rounded-md px-4 py-2 text-white"
          />
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
