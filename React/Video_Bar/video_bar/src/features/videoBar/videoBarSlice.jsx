import { createSlice } from "@reduxjs/toolkit";
import { getHomePage } from "../../store/reducers/GetHomePage";

const initialState = {
  video: [],
  currentPlaying: null,
  searchTerm: "",
  searchResult: "",
  nextPageToken: "",
  recommendedVideo: [],
};

const videoSlice = createSlice({
  name: "videoBar",
  initialState,

  // functionality for my VideoBar Web
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePage.fulfilled, (state, action) => {});
  },
});

export default videoSlice.reducer;
