export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);

        case 'EDIT_TODO':
            return state.map(todo => 
            todo.id === action.payload.id ? {...todo, description: action.payload.description} : todo
        );
        
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, isChecked: !todo.isChecked } : todo
            );

        default:
            return state;
    }
};

export default todoReducer;