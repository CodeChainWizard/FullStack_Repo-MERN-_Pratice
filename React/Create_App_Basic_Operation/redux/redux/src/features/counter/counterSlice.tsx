import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremnets: (state) => {
      state.value += 1;
    },
    decrements: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incremnets, decrements, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
