import { createContext, useReducer, useState, useEffect} from 'react';
import todoReducer from '../reducer/todoReducer';

export const TodoContext = createContext();

const defaultTodos = JSON.parse(localStorage.getItem('tasks')) || [];

const TodoContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    const [filter, setFilter] = useState('all');
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.isChecked;
        } else if (filter === 'completed') {
            return todo.isChecked;
        }
        return true; // 'all' filter
    });

    return <TodoContext.Provider value={{todos: filteredTodos, dispatch, filter, setFilter}}>
        {children}
    </TodoContext.Provider>;
};

export default TodoContextProvider;