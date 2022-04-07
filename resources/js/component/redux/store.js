import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed";

export default configureStore({
  reducer: {
    feed: feedReducer
  }
});
