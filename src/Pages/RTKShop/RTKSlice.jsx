import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const baseUrl = "http://localhost:7000";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const rtkSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export default rtkSlice.reducer;
