import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import TodoItem from "../todo-item/todo-item";

 
const TodoList: React.FC = () =>{
    const todoList = useSelector((state: RootState)=> state.todoListCounter.todoList);
 

    return (
        <> 
            {
                todoList.map((item)=>( 
                    <TodoItem key={item.id} id={item.id} name={item.name} isDone={item.isDone}></TodoItem>
                ))
            }
        </>
    )
}


export default TodoList;