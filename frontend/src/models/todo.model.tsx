

export interface TodoItem{ 
    id: string;
    name: string;
    isDone: boolean;
}

export interface TodoList{
    todoList: TodoItem[]
}