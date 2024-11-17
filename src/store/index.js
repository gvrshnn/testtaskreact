import { configureStore } from '@reduxjs/toolkit';
import {fakeStoreApi} from "../api/fakeStoreApi.js";

export const store = configureStore({
    reducer: {
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakeStoreApi.middleware),
});
