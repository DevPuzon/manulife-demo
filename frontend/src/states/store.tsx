import { configureStore } from "@reduxjs/toolkit";
import todoListCounter from "./counters/todo-list.counter";

export const store = configureStore(
    {
        reducer:{
            todoListCounter
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch