import { combineReducers, configureStore } from "@reduxjs/toolkit";

import questionReducer from "./question_reducer.js";
import resultReducer from "./result_reducer.js";

//** this combines both the reducers and returns it has the central store */
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

//** create store */

export default configureStore({ reducer: rootReducer });
