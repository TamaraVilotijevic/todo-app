import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import './navbar.css';
import iconMoon from '../assets/icon-moon.svg';

const Navbar = () => {
    const {todos, setFilter} = useContext(TodoContext);

    const handleFilterChange = (filterType) => {
        setFilter(filterType);
    };

    return <header>
        <div className="container">
            <div className="row header-title-wrapper">
                <h1>Todo</h1>
                <div>
                    <img src={iconMoon} alt="moon" />
                </div>
            </div>
            <nav className="row">
                <h2>Pending Todos: {todos.length}</h2>
                <div className="row">
                    <button onClick={() => handleFilterChange('all')}>All</button>
                    <button onClick={() => handleFilterChange('active')}>Active</button>
                    <button onClick={() => handleFilterChange('completed')}>Completed</button>
                </div>
            </nav>
        </div>
    </header>
};

export default Navbar;