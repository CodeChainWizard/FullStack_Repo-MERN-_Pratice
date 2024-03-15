import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videoBar/videoBarSlice.jsx";

const store = configureStore({
  reducer: {
    videoBar: videoReducer,
  },
});

export default store;
