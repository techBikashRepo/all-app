import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      if (state < 10) {
        return state + 1;
      }
      return state;
    },
    decrement: (state) => {
      if (state > 0) {
        return state - 1;
      }
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
