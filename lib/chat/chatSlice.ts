import { createSlice } from "@reduxjs/toolkit";

// Define your initial state
const initialState = { value: 0 };

const chatSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions and reducer
export const { increment, decrement } = chatSlice.actions;
export default chatSlice.reducer;
