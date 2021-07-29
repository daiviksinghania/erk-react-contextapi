import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContextFunc } from '../contexts/AuthContextFunc'

const NavbarHook = () => {
    console.log("Auth context:" + AuthContextFunc);
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContextFunc);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return(
        <nav style={{ background: theme.background, color:theme.text, minHeight:'120px'}}>
            <h2 style={{ textAlign: 'center' }}>Context Hook</h2>
            <p 
            onClick={changeAuthStatus}
            style={{ textAlign: 'center' }}
            >{ isLoggedIn ? 'logged in' : 'logged out' }</p>
            <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
            </div>
        </nav>
    )
    
}
export default NavbarHook;
