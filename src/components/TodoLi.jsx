import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { ThemeContext } from "../context/ThemeContext";
import deleteImg from '../assets/icon-cross.svg';
import checkImg from '../assets/icon-check.svg';
import editImg from '../assets/edit.png';

const TodoLi = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const [editing, setEditing] = useState(false);
    const [editingText, setEditingText] = useState('');

    const theme = isLightTheme ? light : dark;

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TODO', payload: todo.id });
    };

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleSave = () => {
        dispatch({ type: 'EDIT_TODO', payload: {id: todo.id, description: editingText}});
        setEditing(false);
    };

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };
    
    return <li className="row" style={{textDecoration: todo.isChecked ? 'line-through' : '', color: theme.text, backgroundColor: theme.todoBg}}>
            {editing ? (<input className="inputTask" style={{color: theme.text, backgroundColor: theme.todoBg}} type="text" value={editingText} onChange={(e) => setEditingText(e.target.value)} />) : (todo.description)}
            <div className="icon-wrapper">
                <img src={deleteImg} alt="delete" className="delete-icon" onClick={handleDelete} />
                {editing ? (
                    <button className="addTodo" onClick={handleSave}>Save</button>
                ) : (
                    <div onClick={handleEdit}>
                        <img className="edit-icon" src={editImg} alt="edit" />
                    </div>
                )}
                
                <div className="check-icon" onClick={handleToggle} style={{backgroundImage: todo.isChecked ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : ''}}>
                    <img src={checkImg} alt="check" />
                </div>
            </div>
        </li>
};

export default TodoLi;