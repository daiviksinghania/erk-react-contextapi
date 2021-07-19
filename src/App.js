import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <Navbar></Navbar>
          <TodoList></TodoList>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
