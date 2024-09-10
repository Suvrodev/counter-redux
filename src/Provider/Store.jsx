import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Components/Counter/CounterSlice";
import BookSlice from "../Pages/Book/BookSlice";
import PostSlice from "../Pages/Post/PostSlice";
import ProductsSlice from "../Pages/Products/ProductsSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    booksR: BookSlice,
    postsR: PostSlice,
    productR: ProductsSlice,
  },
});

export default store;
