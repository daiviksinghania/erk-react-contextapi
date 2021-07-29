import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import AuthContextFuncProvider from './contexts/AuthContextFunc';
import NavbarHook from './components/NavbarHook';
import TodoListHook from './components/TodoListHook';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <TodoListContextProvider>
            <ThemeContextProvider>
              <Navbar></Navbar>
              <TodoList></TodoList>
              <AuthContextFuncProvider>
              <NavbarHook />
              <TodoListHook />
              </AuthContextFuncProvider>
            </ThemeContextProvider>
          </TodoListContextProvider>
          </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
