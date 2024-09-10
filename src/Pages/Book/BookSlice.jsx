import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 15.99,
      quantity: 3,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 12.99,
      quantity: 5,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 10.99,
      quantity: 4,
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 14.99,
      quantity: 2,
    },
    {
      id: 5,
      title: "Moby Dick",
      author: "Herman Melville",
      price: 11.99,
      quantity: 6,
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 9.99,
      quantity: 7,
    },
  ],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    deleteBook: (state, actions) => {
      const id = actions.payload;
      console.log("Comming ID: ", id);
      state.books = state.books.filter((book) => book.id !== id);
      console.log("Now All Books: ", state.books);
    },
    addBook: (state, actions) => {
      const newBook = actions.payload;
      state.books = [...state.books, newBook];
      console.log("All Books: ", state.books);
    },
    updateBook: (state, actions) => {
      // console.log("All Books: ", state.books);
      //   const { id, name, author, price, quantity } = actions.payload;
      //   console.log("Come in Book ID:", id);
      //   console.log("All Books:", state.books);
      //   const existsBook = state.books.find((book) => book.id === id);
      //   console.log("exists Book: ", existsBook);
      //   if (existsBook) {
      //     existsBook.id = id;
      //     existsBook.name = name;
      //     existsBook.author = author;
      //     existsBook.price = price;
      //     existsBook.quantity = quantity;
      //   }
      //   console.log("All Books: ", state.books);

      const { id, name, price, quantity, author } = actions.payload;
      console.log("Comming ID: ", id);
      const existsBook = state.books.find((book) => book.id === id);
      console.log("Exist Book: ", existsBook);
      console.log("Now All Books: ", state.books);
    },
  },
});

export const { deleteBook, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
