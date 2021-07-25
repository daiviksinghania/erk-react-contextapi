import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class TodoList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} className="ui list">
                <p className="item">Test1</p>
                <p className="item">Test2</p>
                <p className="item">Test3</p>
                <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
            </div>
        )
    }
}
