import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"

interface PostsState {
    posts: any[],
    status: string,
    error: null | any;
}

const initialState: PostsState = {
    posts: [],
    status: "idle",
    error: null
}

export const getPosts = createAsyncThunk("posts/getPosts",async () => {
    const response = await axios.get("http://localhost:4000/api/v1/posts");
    return response.data.body;
})

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers:{
        [getPosts.fulfilled.type]: (state,action: PayloadAction<PostsState[]>) => {
            state.status = "success";
            state.posts = action.payload;
        } ,
        [getPosts.pending.type]: (state) => {
            state.status = "loading";
        },
        [getPosts.pending.type]: (state,action: PayloadAction<PostsState[]>) => {
            state.status = "error";
            state.error = action.payload;
        }
    }
})