import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todos/todoSlice"

const Store = configureStore(
    {
        reducer: {
            todos: TodoReducer,
        },

    }
)
export default Store;