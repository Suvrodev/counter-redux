import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Components/Counter/CounterSlice";
import BookSlice from "../Pages/Book/BookSlice";
import PostSlice from "../Pages/Post/PostSlice";
import ProductsSlice from "../Pages/Products/ProductsSlice";
import shopSlice from "../Pages/Shop/ShopSlice";
import RTKSlice from "../Pages/RTKShop/RTKSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../Pages/RTKShop/Services/ProductApi";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    booksR: BookSlice,
    postsR: PostSlice,
    productR: ProductsSlice,
    shopR: shopSlice,
    rtkR: RTKSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// setupListeners(store.dispatch)

export default store;
