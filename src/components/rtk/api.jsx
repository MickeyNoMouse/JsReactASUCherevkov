import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000'}),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => '/products/{product_id}', 
        }),
    }),
});
console.log(productsApi)
export const { useGetProductQuery} = productsApi;