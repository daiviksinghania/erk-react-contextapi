import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext'

const TodoListHook = () => {
    const [todo, SetTodo] = useState('');
    const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        SetTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    }

    return(
        <div style={{ background: theme.background, color: theme.text, minHeight: '140px', textAlign: 'center'}} className="ui list">
            {todos.length ? (
                todos.map((todo) => {
                    return <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className="item">{todo.text}</p>
                })
            ):(
               <div>You have no todos</div> 
            )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add Todo: </label>
                <input type="text" id="todo" onChange={handleChange}/>
                <input type="submit" value="Add New Todo" className="ui button primary" />
            </form>
            <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
        </div>
    );
}

export default TodoListHook;
