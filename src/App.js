import './App.css';
import Todo from './components/Todo';
import TodoContextProvider from './context/TodoContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Navbar />
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
