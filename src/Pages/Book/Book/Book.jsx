import React from "react";
import { useSelector } from "react-redux";
import BookBox from "../BookBox/BookBox";
import AddBook from "../AddBook/AddBook";

const Book = () => {
  const { books } = useSelector((state) => state.booksR);
  //   console.log("Books State: ", books);
  return (
    <div>
      <h1>Lists of Book</h1>
      <div>
        <AddBook />
      </div>
      <div>
        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
            {books.map((book, idx) => (
              <BookBox key={idx} book={book} />
            ))}
          </div>
        ) : (
          <div>
            <h1>No Books Available</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
