import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../BookSlice";

const UpdateBook = ({ id, title, author, price, quantity }) => {
  // console.log("Title: ", title);
  const closeRef = useRef(null);

  const disPatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const price = Form.price.value;
    const quantity = Form.quantity.value;
    const author = Form.author.value;

    const newBook = { id, name, price, quantity, author };
    // console.log(newBook);
    disPatch(updateBook(newBook));

    if (closeRef.current) {
      closeRef.current.click();
    }
  };

  return (
    <div>
      <form method="dialog">
        <button className="btn btn-primary invisible " ref={closeRef}>
          Hide
        </button>
      </form>
      <form
        onSubmit={handleAddBook}
        className=" flex flex-col gap-4 w-1/2 mx-auto border p-5 rounded-md"
      >
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          defaultValue={title}
          className="bg-transparent w-full border rounded-md px-4 py-2 text-white"
        />

        <div className="flex gap-4">
          <input
            type="number"
            name="id"
            id=""
            placeholder="ID"
            defaultValue={id}
            className="bg-transparent w-1/2 border  rounded-md px-4 py-2 text-white"
          />
          <input
            type="text"
            name="author"
            id=""
            placeholder="Author Name"
            defaultValue={author}
            className="bg-transparent w-1/2 border rounded-md px-4 py-2 text-white"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="number"
            name="price"
            id=""
            placeholder="Price"
            defaultValue={price}
            className="bg-transparent w-1/2 border rounded-md px-4 py-2 text-white"
          />

          <input
            type="number"
            name="quantity"
            id=""
            placeholder="Quantity"
            defaultValue={quantity}
            className="bg-transparent w-1/2 border rounded-md px-4 py-2 text-white"
          />
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
