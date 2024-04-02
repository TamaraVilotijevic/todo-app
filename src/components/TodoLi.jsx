import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import deleteImg from '../assets/icon-cross.svg';
import checkImg from '../assets/icon-check.svg';

const TodoLi = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TODO', payload: todo.id });
    };

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };
    
    return <li className="row" style={{textDecoration: todo.isChecked ? 'line-through' : ''}}>
            {todo.description}
            <div className="icon-wrapper">
                <img src={deleteImg} alt="delete" className="delete-icon" onClick={handleDelete} />
                <div className="check-icon" onClick={handleToggle} style={{backgroundImage: todo.isChecked ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : ''}}>
                    <img src={checkImg} alt="check" />
                </div>
            </div>
        </li>
};

export default TodoLi;