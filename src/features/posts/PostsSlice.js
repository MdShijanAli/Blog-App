import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./PostsAPI"

const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
  async () => {
    const posts = await getPosts()
    return posts
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error.message
      })
  }
})

export default postsSlice.reducer