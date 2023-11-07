import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"
import { Post } from "../components/PostCard/PostCard";

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
    const response = await axios.get("http://localhost:4000/api/v1/posts?_sort=createdAt&_order=desc");
    return response.data.body;
})

export const addPosts = createAsyncThunk("posts/addPosts", async(newPost: Post) => {
    const response = await axios.post("http://localhost:4000/api/v1/posts", newPost)
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
        [getPosts.rejected.type]: (state,action) => {
            state.status = "error";
            state.error = action.error.message;
        },
        [addPosts.fulfilled.type]: (state,action) => {
            state.status = "success";
            state.posts.unshift(action.payload)
        },
        [addPosts.pending.type]: (state) => {
            state.status = "loading";
        },
        [addPosts.rejected.type]: (state,action) => {
            state.status = "error";
            state.error = action.error.message
        }
    }
})