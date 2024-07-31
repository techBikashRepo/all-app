import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";
import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer,
  },
});

export default store;
