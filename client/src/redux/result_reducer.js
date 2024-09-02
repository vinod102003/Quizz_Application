import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "results",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload); // storing the index value of the options
    },
  },
});

export const { setUserId, pushResultAction } = resultReducer.actions;

export default resultReducer.reducer;
