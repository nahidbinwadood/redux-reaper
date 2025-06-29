import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todo-slice"
import counterReducer from "./features/counter/counter-slice"


const store= configureStore({
    reducer:{
        todo:todoReducer,
        counter:counterReducer
    }
})

export type RootState=ReturnType <typeof store.getState>
export type AppDispatch=typeof store.dispatch

export default store;