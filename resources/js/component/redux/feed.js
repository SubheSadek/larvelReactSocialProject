import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feeds: [],
  },
  reducers: {
    addFeed: (state, action) => {
        state.feeds.unshift(action.payload)
    },
    allFeed: (state, action) => {
        state.feeds = action.payload
    },
    deleteSingleFeed: (state, action) => {
        state.feeds = state.feeds.filter((feed) => feed.id !== action.payload)
    },
  }
});

// Action creators are generated for each case reducer function
export const { addFeed, allFeed, deleteSingleFeed } = feedSlice.actions;

export default feedSlice.reducer;
