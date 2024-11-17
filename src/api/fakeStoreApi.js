import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery
} = fakeStoreApi;
