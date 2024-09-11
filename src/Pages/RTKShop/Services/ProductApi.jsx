import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (pageNumber) => {
        console.log("Page Number: ", pageNumber);
        return `products?page=${pageNumber}`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
