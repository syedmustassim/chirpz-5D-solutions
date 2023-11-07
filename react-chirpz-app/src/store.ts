import {configureStore} from "@reduxjs/toolkit";
import { postSlice } from "./features/postSlice";

export const store = configureStore({
    reducer: {
        posts: postSlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch