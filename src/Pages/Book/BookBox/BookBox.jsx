import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../BookSlice";
import AddBook from "../AddBook/AddBook";
import UpdateBook from "../UpdateBook/UpdateBook";

const BookBox = ({ book }) => {
  const { id, title, author, price, quantity } = book;

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const modalRef = useRef(null);

  //   const showModal = () => {
  //     if (modalRef.current) {
  //       modalRef.current.showModal();
  //     }
  //   };

  const handleUpdate = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div>
      <div className="border p-2">
        <dialog id="my_modal_3" ref={modalRef} className="modal  ">
          <div className="modal-box  w-11/12 max-w-5xl  bg-[#5921B5]">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost bg-[#764EC3] hover:bg-[#764EC3]  absolute right-2 top-2  text-white z-20">
                ✕
              </button>
            </form>
            <div className="p-2 w-full">
              <UpdateBook
                id={id}
                title={title}
                author={author}
                price={price}
                quantity={quantity}
              />
            </div>
          </div>
        </dialog>

        <div>
          <h1 className="text-xl font-bold"> {title}</h1>
          <div className="flex justify-between">
            ${price}
            <p> {quantity} pices</p>
          </div>
          <p className="italic text-center">{author}</p>
        </div>
        <div className="flex justify-between my-4">
          <button
            className="btn btn-error text-white"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className="btn btn-success text-white"
            onClick={() => handleUpdate()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookBox;
