import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import NavbarHook from './components/NavbarHook';
import TodoListHook from './components/TodoListHook';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar></Navbar>
            <TodoList></TodoList>
            <NavbarHook />
            <TodoListHook />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
