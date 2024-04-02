import { useContext, useState } from "react";
import TodoLi from "./TodoLi";
import { TodoContext } from "../context/TodoContext";
import './todo.css';

const Todo = () => {
    const {todos, dispatch} = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');
    
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: { id: Math.random()*100, description: newTodo, isChecked: false } });
            setNewTodo('');
        } else {
            alert('You must fill the input field');
        }
    };

    return <div className="container todo-wrapper">
            <form onSubmit={handleSubmit} className="row">
                <input className="inputTask" type="text" name="task" value={newTodo} onChange={handleChange} placeholder="Create a new todo..." />
                <input className="addTodo" type="submit" value="Add todo" />
            </form>
            <ul className="todo-list">
                {todos && todos.map(todo => <TodoLi key={todo.id} todo={todo} />)}
            </ul>
        </div>;
};

export default Todo;