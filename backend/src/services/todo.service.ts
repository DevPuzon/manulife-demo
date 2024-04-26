import { TodoItem, TodoList } from "../models/todo.model";


let todoList: TodoItem[] = [
    {
        id:'1',
        name:"Exercise",
        isDone:false
    },
    {
        id:'2',
        name:"Eat",
        isDone:false
    },
    {
        id:'3',
        name:"Jump",
        isDone:false
    },
    {
        id:'4',
        name:"Walk",
        isDone:false
    }
]

export const findAll = () : TodoItem[] =>{
    return todoList;
}

export const deleteItem = (id:string): TodoItem[] =>{
    const findIndex = todoList.findIndex((el)=>el.id);

    if(findIndex == -1) throw new Error("Id not exist");

    todoList = todoList.splice(findIndex,1);
    return todoList;
}

export const updateItem = (id:string,isDone:boolean): TodoItem[] =>{
    const findIndex = todoList.findIndex((el)=>el.id);
    
    if(findIndex == -1) throw new Error("Id not exist");

    todoList[findIndex].isDone = isDone;
    return todoList;
}