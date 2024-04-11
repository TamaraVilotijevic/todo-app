import { useContext, useState } from "react";
import TodoLi from "./TodoLi";
import { TodoContext } from "../context/TodoContext";
import { ThemeContext } from "../context/ThemeContext";
import './todo.css';

const Todo = () => {
    const {todos, dispatch} = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');
    const {isLightTheme, light, dark} = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;
    
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: { id: Math.random()*100, description: newTodo, isChecked: false } });
            setNewTodo('');
        } else {
            alert('You must fill the input field');
        }
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            addTodo(e);
        }
    };

    return <div className="container todo-wrapper">
            <form onSubmit={addTodo} className="row" style={{color: theme.text, backgroundColor: theme.todoBg}}>
                <input className="inputTask" style={{color: theme.text, backgroundColor: theme.todoBg}} type="text" name="task" value={newTodo} onChange={handleChange} onKeyDown={handleEnter} placeholder="Create a new todo..." />
                <input className="addTodo" type="submit" value="Add todo" />
            </form>
            <ul className="todo-list">
                {todos && todos.map(todo => <TodoLi key={todo.id} todo={todo} />)}
            </ul>
        </div>;
};

export default Todo;