import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TodoItem, TodoList } from "../../models/todo.model"
import axios from "axios";
import { environment } from "../../environments/environment";

export interface TodoListState{
    todoList: TodoItem[]
}

export interface TodoUpdateReq{
    id:string;
    isDone:boolean
}

const initialState : TodoListState = {
    todoList: []
}

export const counterTodo = createSlice(
    {
        name:"counterTodo",
        initialState,
        reducers:{ 
        },
        extraReducers:(builder)=>{
            builder
                .addCase(initTodoList.fulfilled,(state,action:PayloadAction<TodoItem[]>)=>{
                    state.todoList = action.payload; 
                })
                .addCase(deleteItem.fulfilled,(state,action:PayloadAction<TodoItem[]>)=>{
                    state.todoList = action.payload;
                })
                .addCase(updateItem.fulfilled,(state,action:PayloadAction<TodoItem[]>)=>{
                    state.todoList = action.payload;
                })
        }
    }
)
 
export const initTodoList = createAsyncThunk(
    "counterTodo/initTodoList",
    async()=>{
        const res = await axios.get(`${environment.baseURl}/todo`,{}); 
        return res.data;
    }
) 

export const deleteItem = createAsyncThunk(
    "counterTodo/deleteItem",
    async(id:string)=>{
        const res = await axios.delete(`${environment.baseURl}/todo/${id}`,{});
        return res.data;
    }
) 

export const updateItem = createAsyncThunk(
    "counterTodo/updateItem",
    async (req:TodoUpdateReq) => {
        console.log("updateItem",req);
        const res = await axios.put(`${environment.baseURl}/todo/${req.id}`,{isDone:req.isDone});
        return res.data;
    }
) 
export default counterTodo.reducer;