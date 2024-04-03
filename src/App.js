import './App.css';
import Todo from './components/Todo';
import TodoContextProvider from './context/TodoContext';
import ThemeContextProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <ThemeContextProvider>
      <Wrapper>
        <TodoContextProvider>
          <Navbar />
          <Todo />
        </TodoContextProvider>
      </Wrapper>
    </ThemeContextProvider>
  );
}

export default App;
