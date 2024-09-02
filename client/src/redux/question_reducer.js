import { createSlice } from "@reduxjs/toolkit";

//** this create the reduer with inital value */
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [], // used to store questions
    answers: [], // used to store the results
    trace: 0, // used to keep track of question number
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state, // return the previous state
        queue: action.payload, // gives the user input value allows to give the property
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
  },
});

export const { startExamAction, moveNextAction, movePrevAction } =
  questionReducer.actions; // this return the object with the updated value

export default questionReducer.reducer;
