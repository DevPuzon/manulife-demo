import { useDispatch } from "react-redux";
import { AppDispatch } from "../../states/store";
import { updateItem } from "../../states/counters/todo-list.counter";


interface TodoItemProps{
    id:string;
    name:string;
    isDone:boolean
}
const TodoItem: React.FC<TodoItemProps> = ({id,name,isDone}) =>{
    const dispatch = useDispatch<AppDispatch>();

    const onChange = ()=>{
        const reqIsDone = !isDone;
        dispatch(updateItem({id,isDone:reqIsDone}));
    }

    return (
        <>
            <div>
                <input type="checkbox" checked={isDone} onChange={()=>{onChange()}} />
                <p>{name}</p>
            </div>
        </>
    )
}

export default TodoItem;