import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

// const baseUrl = "http://localhost:3003";
// const { baseUrl } = useContext(AuthContext);

export const fetchProducts = createAsyncThunk(
  "products/fetchproducts",
  async (baseUrl) => {
    console.log(baseUrl);
    const res = await axios.get(`${baseUrl}/products`);

    return res.data;
  }
);

export const addProduct = createAsyncThunk("products/add", async (product) => {
  console.log("New Product: ", product);
  return product;
});
export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  console.log("Come on Baby: ", id);
  // const res = await axios.delete(`${baseUrl}/${id}`);
  // return res.data;
  return id;
});

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.products = actions.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, actions) => {
      state.isLoading = false;
      state.products = [];
      state.error = actions.error.message;
    });
    builder.addCase(deleteProduct.fulfilled, (state, actions) => {
      state.products = state.products.filter(
        (product) => product.id !== actions.payload
      );
    });
    builder.addCase(addProduct.fulfilled, (state, actions) => {
      const newProduct = actions.payload;
      state.products = [...state.products, newProduct];
    });
  },
  reducers: {},
});

export default productSlice.reducer;
