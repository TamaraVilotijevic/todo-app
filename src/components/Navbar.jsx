import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { ThemeContext } from "../context/ThemeContext";
import './navbar.css';
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';

const Navbar = () => {
    const {todos, setFilter} = useContext(TodoContext);
    const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
    const [isActive, setIsActive] = useState('all');

    const theme = isLightTheme ? light : dark;

    const handleFilterChange = (filterType) => {
        setFilter(filterType);
        setIsActive(filterType);
    };

    const css = {
        backgroundImage: theme.bgImg,
        backgroundPosition: "center",
        backgroundSize: "cover"
    };

    return <header style={css}>
        <div className="container">
            <div className="row header-title-wrapper">
                <h1>Todo</h1>
                <div>
                    <img src={isLightTheme ? iconMoon : iconSun} alt="moon" onClick={toggleTheme} />
                </div>
            </div>
            <nav className="row">
                <h2 style={{color: theme.todoBg}}>Pending Todos: {todos.length}</h2>
                <div className="row">
                    <button style={{color: isActive === 'all' ? theme.active : theme.btnText, backgroundColor: theme.todoBg}} onClick={() => handleFilterChange('all')}>All</button>
                    <button style={{color: isActive === 'active' ? theme.active : theme.btnText, backgroundColor: theme.todoBg}} onClick={() => handleFilterChange('active')}>Active</button>
                    <button style={{color: isActive === 'completed' ? theme.active : theme.btnText, backgroundColor: theme.todoBg}} onClick={() => handleFilterChange('completed')}>Completed</button>
                </div>
            </nav>
        </div>
    </header>
};

export default Navbar;