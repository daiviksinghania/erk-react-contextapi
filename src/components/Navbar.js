import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <nav>
                <h2 className="ui centered header">Context Api</h2>
                <div className="ui three buttons">
                    <button className="ui button">Overview</button>
                    <button className="ui button">Contact</button>
                    <button className="ui button">Support</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;
