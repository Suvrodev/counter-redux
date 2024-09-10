import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const baseUrl = "http://localhost:7000";

export const fetchItems = createAsyncThunk("items/fetchItems", async (page) => {
  console.log("Page Number: ", page);
  const res = await axios.get(`${baseUrl}/products?page=${page}`);

  return res.data;
});

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, actions) => {
      state.isLoading = false;
      // state.items = actions.payload;
      state.items = [...state.items, ...actions.payload];
      state.error = null;
    });
    builder.addCase(fetchItems.rejected, (state, actions) => {
      state.isLoading = false;
      state.items = [];
      state.error = actions.error.message;
    });
  },
  reducers: {},
});

export default shopSlice.reducer;
